import { Controller, Get, Req } from '@nestjs/common';
import UsersService from './users.service.js';
import { type AuthenticatedRequest } from '../common/middleware/logger.middleware.js';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Get("me")
    async me(
        @Req() req: AuthenticatedRequest
    ) {
        const user = await this.userService.me(req.user.id)
        return {
            message: "Lấy thông tin người dùng thành công",
            data: user
        }
    }
    @Get("profile")
    async profile(
        @Req() req: AuthenticatedRequest
    ) {
        const user = await this.userService.profile(req.user.id)
        return {
            message: "Lấy thông tin hồ sơ thành công",
            data: user
        }
    }
}
