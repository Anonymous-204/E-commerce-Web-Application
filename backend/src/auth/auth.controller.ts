import { Body, Controller, Post, Res } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './auth.dto.js';
import { AuthService } from './auth.service.js';
import type {Response} from 'express'
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post("signup")
    signUp(
        @Body() data: SignUpDTO
    ){return this.authService.signUp(data)}

    @Post("signin")
    async signIn(
        @Body() data: SignInDTO,
        @Res({passthrough:true}) res: Response
    ) {
        const result = await this.authService.signIn(data)
        res.cookie('refreshToken',result.refreshToken,{
            httpOnly: true,
            secure: false,
            sameSite: 'strict'
        })
        return {accessToken: result.accessToken, message: result.message}
    }
    @Post("signout")
    async signOut(
        @Body("userId") userId: number,
        @Res({passthrough:true}) res: Response
    ){
        const result = await this.authService.SignOut(userId)
        res.clearCookie('refreshToken')
        return {message: result.message}
    }
    @Post("refresh")
    async refreshToken(
        @Body("userId") userId: number,
        @Body("refreshToken") refreshToken: string,
        @Res({passthrough:true}) res: Response
    ){
        const result = await this.authService.refreshToken(userId, refreshToken)
        return {accessToken: result.accessToken}
    }
}
