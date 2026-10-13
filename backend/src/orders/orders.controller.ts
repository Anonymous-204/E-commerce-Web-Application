import { Body, Controller, Get, Param, ParseIntPipe, Post, Req } from '@nestjs/common';
import { OrdersService } from './orders.service.js';
import { Roles } from '../common/decorators/roles.decorator.js';
import { Role } from '../generated/prisma/enums.js';
import { type AuthenticatedRequest } from '../common/middleware/logger.middleware.js';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService:OrdersService) {}
    @Post('checkout')
    @Roles(Role.customer)
    async checkOut(@Req() req: AuthenticatedRequest) {
        return this.ordersService.checkOut(req.user?.id)
    }

    @Get()
    @Roles(Role.customer)
    async getOder(@Req() req: AuthenticatedRequest) {
        return this.ordersService.getOrders(req.user?.id)
    }

    @Get(':orderId/items')
    @Roles(Role.customer)
    async getItem(
        @Param('orderId', ParseIntPipe) orderId: number,
        @Req() req: AuthenticatedRequest
    ) {
        return this.ordersService.getItem(orderId, req.user?.id)
    }
}