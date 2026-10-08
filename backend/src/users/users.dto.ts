import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { Role } from '../generated/prisma/browser.js';
export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  userName?: string;

  @IsString()
  @IsNotEmpty()
  email?: string;

  @IsEnum(Role)
  role?: Role;

  @IsString()
  phone?: string;

  @IsString()
  address?: string;
}