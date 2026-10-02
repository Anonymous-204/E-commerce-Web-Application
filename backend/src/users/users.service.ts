import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Role } from '../generated/prisma/enums.js';
import crypto from 'node:crypto';
import bcrypt from 'bcrypt'
@Injectable()
export default class UsersService {
    constructor(private readonly prisma: PrismaService ) {}
    async findByEmail(email:string) {
        return await this.prisma.user.findUnique({
        where:{
            email
        }})
    }
    async findById(id:number) {
        return await this.prisma.user.findUnique({
        where:{
            id
        }})
    }
    async findSession(userId: number, hashedRefreshToken: string) {
        return await this.prisma.session.findFirst({
            where: {
                userId,
                hashedRefreshToken
            }
        })
    }
    async createUser(userName: string, email: string, hashedPassword:string, role:Role) {
        await this.prisma.user.create({
            data: {
                userName,
                email,
                hashedPassword,
                role
            }
        })
    }
    async validateUser(password:string, hashedPassword:string) {
        return await bcrypt.compare(password, hashedPassword)
    }
    async hashRefreshToken(userId: number, refreshToken: string){
        const hashedRefreshToken = crypto.createHash('sha256').update(refreshToken).digest('hex')
        this.prisma.session.create({
            data: {
                userId,
                hashedRefreshToken,
                expiredAt: new Date(Date.now() + 1000*60*60*24*7)
            }
        })
    }
    async refreshTokenClear(userId: number){
        await this.prisma.session.deleteMany({
            where: {
                userId
            }
        })
    }
}