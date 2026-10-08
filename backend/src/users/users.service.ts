import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Role } from '../generated/prisma/enums.js';
import crypto from 'node:crypto';
import bcrypt from 'bcrypt'
import { UpdateUserDto } from './users.dto.js';
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
    async findSession(hashedRefreshToken: string) {
        const session = await this.prisma.session.findFirst({
            where: {
                hashedRefreshToken
            }
        })
        return session;
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
        await this.prisma.session.create({
            data: {
                userId,
                hashedRefreshToken,
                expiredAt: new Date(Date.now() + 1000*60*60*24*7)
            }
        })
    }
    async refreshTokenClear(hashedRefreshToken: string){
        await this.prisma.session.deleteMany({
            where: {
                hashedRefreshToken
            }
        })
    }
    async me(id: number) {
        return await this.prisma.user.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                role: true,
                userName: true
            }
        })
    }
    async profile(id: number) {
        return await this.prisma.user.findUnique({
            where: {
                id
            }
        })
    }
    async updateProfile(id: number, data: UpdateUserDto) {
        const { userName, email, role, phone, address } = data;

        return await this.prisma.user.update({
            where: {
                id
            },
            data: {
                userName,
                email,
                role,
                phone,
                address
            },
            select: {
                id: true,
                userName: true,
                email: true,
                phone: true,
                address: true,
                role: true
            }
        });
    }
}