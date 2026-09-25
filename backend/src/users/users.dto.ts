import { IsString, IsEmail, IsNotEmpty, MinLength } from "class-validator";
export class CreateUserDTO {
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
    
}