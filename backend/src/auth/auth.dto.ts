import { IsString, IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Role } from "../generated/prisma/enums.js";
export class SignUpDTO {
    @IsString()
    @IsNotEmpty()
    userName: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string
    
    @IsNotEmpty()
    role: Role
}

export class SignInDTO {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string
}