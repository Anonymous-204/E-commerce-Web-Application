import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import 'dotenv/config'
import crypto from 'node:crypto';
import {JwtService} from '@nestjs/jwt'
import { SignUpDTO, SignInDTO } from './auth.dto.js';
import UsersService from '../users/users.service.js';
import bcrypt from 'bcrypt'
@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService,
                private readonly jwtService: JwtService
     ){}
    async signUp(data: SignUpDTO) {
        const {userName, email, password, role} = data
        if (!userName||!email||!password) throw new BadRequestException("vui lòng nhập đủ thông tin")
        const exitingUser = await this.userService.findByEmail(email)
        if (exitingUser) throw new BadRequestException('Email đã tồn tại');
        const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT))
        await this.userService.createUser(userName, email, hashedPassword, role)
        const roleName = {
            customer: "Khách hàng",
            shop: "Chủ cửa hàng",
            admin: "quản trị viên"
        }[role]
        return {message: `Chào mừng ${roleName} ${userName}`}
    }
    async signIn(data: SignInDTO) {
        const {email, password} = data
        const exiting = await this.userService.findByEmail(email)
        if (!exiting) throw new UnauthorizedException("Sai email hoặc mật khẩu")
        const validate = await this.userService.validateUser(password, exiting.hashedPassword)
        if (!validate) throw new UnauthorizedException("Sai email hoặc mật khẩu")
        const accessToken = this.jwtService.sign({
            id: exiting.id,
            role: exiting.role
        })
        const refreshToken = crypto.randomBytes(32).toString('hex');
        await this.userService.hashRefreshToken(exiting.id, refreshToken)
        return {accessToken, refreshToken, message:`Đăng nhập thành công, chào mừng ${exiting.userName}`}
    }
    async SignOut(refreshToken: string) {
        const hashedRefreshToken = crypto.createHash('sha256').update(refreshToken).digest('hex')
        await this.userService.refreshTokenClear(hashedRefreshToken)
        return {message: "Đăng xuất thành công" }
    }
    async refreshToken(refreshToken: string) {
        const hashedRefreshToken = crypto.createHash('sha256').update(refreshToken).digest('hex')
        const session = await this.userService.findSession(hashedRefreshToken)
        if (!session) throw new UnauthorizedException("Token không hợp lệ")
        if (session.expiredAt < new Date()) { 
            await this.userService.refreshTokenClear(hashedRefreshToken)
            throw new UnauthorizedException("Token đã hết hạn")
        }
        const user = await this.userService.findById(session.userId)
        if (!user) throw new UnauthorizedException("Người dùng không tồn tại")
        const accessToken = this.jwtService.sign({
            id: user.id,
            role: user.role
        })
        return { accessToken }
    }
}