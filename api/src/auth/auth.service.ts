import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { jwtConstants, TPayload, TTokens } from 'src/utils';
import { JwtService } from '@nestjs/jwt';
import { ERole, Prisma, User } from '@prisma/client';
import { LoginAuthDto, RegisterAuthDto, UpdateAuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async hashData(data: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(data, salt);
  }

  async compareData(data: string, hashData: string): Promise<boolean> {
    return await bcrypt.compare(data, hashData);
  }

  async signPayload(user: User): Promise<TTokens> {
    const payload: TPayload = {
      sub: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    };
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: 60 * 15, // 15 minutes
      secret: jwtConstants.accessSecret,
    });
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: 24 * 60 * 60, // 1 day
      secret: jwtConstants.refreshSecret,
    });

    return { accessToken, refreshToken };
  }

  async updateRefreshToken(id: number, refreshToken: string): Promise<void> {
    const rtHashed = await this.hashData(refreshToken);
    await this.prisma.user.update({
      where: { id },
      data: {
        rtHashed,
      },
    });
  }

  async login(data: LoginAuthDto): Promise<TTokens> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) throw new UnauthorizedException('email or password incorrect');

    const isMatch = await this.compareData(data.password, user.password);

    if (!isMatch)
      throw new UnauthorizedException('email or password incorrect');

    const tokens = await this.signPayload(user);
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    return tokens;
  }

  async register(createAuthDto: RegisterAuthDto): Promise<TTokens> {
    const user = await this.prisma.user.create({
      data: {
        ...createAuthDto,
        role: ERole.USER,
        password: await this.hashData(createAuthDto.password),
      },
    });

    const tokens = await this.signPayload(user);
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    return tokens;
  }

  async forgotPassword() {
    return 'This action returns a #forgotPassword';
  }

  async resetPassword() {
    return 'This action returns a #resetPassword';
  }

  async refreshToken(id: number, refreshToken: string): Promise<TTokens> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) throw new UnauthorizedException('refresh token invalid');

    const isMatch = await this.compareData(refreshToken, user.rtHashed);

    if (!isMatch) throw new UnauthorizedException('refresh token invalid');

    const tokens = await this.signPayload(user);
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    return tokens;
  }

  async logout(id: number) {
    await this.prisma.user.updateMany({
      where: {
        id,
        rtHashed: {
          not: null,
        },
      },
      data: {
        rtHashed: null,
      },
    });
  }

  async profile() {
    return 'This action returns a #profile';
  }

  async updateProfile(data: UpdateAuthDto) {
    console.log(data);
    return 'This action returns a #updateProfile';
  }

  async updateRole(id: number, role: ERole) {
    try {
      const user = this.prisma.user.update({
        where: {
          id,
        },
        data: {
          role,
        },
      });

      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        console.log(' name Error', error.name);
      }
      throw new BadRequestException(error.message);
    }
  }
}
