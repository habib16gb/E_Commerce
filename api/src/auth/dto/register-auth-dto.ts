import { ApiProperty } from '@nestjs/swagger';
import { ERole } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export class RegisterAuthDto {
  @ApiProperty({
    description: 'Email',
    example: '<example@email.com>',
    type: 'string',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsOptional()
  phone?: string;

  @ApiProperty()
  @IsOptional()
  address?: string;

  @ApiProperty({
    enum: ERole,
    description: 'list of roles (ADMIN, User, SELLER)',
    isArray: false,
  })
  @IsEnum(ERole)
  role: ERole;
}
