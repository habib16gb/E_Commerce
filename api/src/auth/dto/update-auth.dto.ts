import { PartialType } from '@nestjs/swagger';
import { RegisterAuthDto } from './register-auth-dto';

export class UpdateAuthDto extends PartialType(RegisterAuthDto) {}
