import { Body, Controller, Delete, Get, Put, Req } from '@nestjs/common';
import { CartsService } from './carts.service.js';
import { type AuthenticatedRequest } from '../common/middleware/logger.middleware.js';
import { Roles } from '../common/decorators/roles.decorator.js';
import { Role } from '../generated/prisma/enums.js';
@Controller('carts')
export class CartsController {
    constructor(private readonly cartsService: CartsService){}

    @Get('')
    @Roles(Role.customer)
    async getOrCreateCart(
        @Req() req: AuthenticatedRequest)
    {
        return await this.cartsService.getCart(req.user.id)
    }    
    @Get('items')
    @Roles(Role.customer)
    async getItems(
        @Req() req: AuthenticatedRequest
    ){
        return this.cartsService.getItems(req.user.id)
    }
    
    @Put('')
    @Roles(Role.customer)
    async addToCart(
        @Body() data: {productId: number},
        @Req() req: AuthenticatedRequest)
    {
        return await this.cartsService.addToCart(data.productId, req.user.id)
    }

    @Delete('')
    @Roles(Role.customer)
    async clearCart(
        @Req() req: AuthenticatedRequest
    ){
        return await this.cartsService.clearCart(req.user.id)
    }
}
