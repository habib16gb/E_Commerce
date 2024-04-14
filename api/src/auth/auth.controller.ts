import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  HttpCode,
  HttpStatus,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth-dto';
import { ApiBody } from '@nestjs/swagger';
import { AtGuard, RtGuard, TTokens } from 'src/utils';
import { LoginAuthDto, UpdateAuthDto } from './dto';
import { Request } from 'express';
import { ERole } from '@prisma/client';
import { Roles } from 'src/utils/decorators/roles.decorators';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: [LoginAuthDto] })
  login(@Body() data: LoginAuthDto): Promise<TTokens> {
    return this.authService.login(data);
  }

  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: [RegisterAuthDto] })
  register(@Body() data: RegisterAuthDto): Promise<TTokens> {
    return this.authService.register(data);
  }

  @Post('/forgot-password')
  forgotPassword() {
    return this.authService.forgotPassword();
  }

  @Post('/reset-password')
  resetPassword() {
    return this.authService.resetPassword();
  }

  @UseGuards(RtGuard)
  @Post('/refresh-token')
  @HttpCode(HttpStatus.OK)
  refreshToken(@Req() req: Request) {
    const user = req.user;
    return this.authService.refreshToken(user['sub'], user['refreshToken']);
  }

  @UseGuards(AtGuard)
  @Post('/logout')
  @HttpCode(HttpStatus.OK)
  logout(@Req() req: Request) {
    const user = req.user;
    return this.authService.logout(user['sub']);
  }

  @Get('/profile')
  profile() {
    return this.authService.profile();
  }

  @Patch('/profile')
  updateProfile(@Body() data: UpdateAuthDto) {
    return this.authService.updateProfile(data);
  }

  @UseGuards(AtGuard)
  @Patch('/updateRole')
  @Roles(ERole.ADMIN, ERole.SELLER)
  updateRole(@Body('id') id: number, @Body('role') role: ERole) {
    return this.authService.updateRole(id, role);
  }
}
