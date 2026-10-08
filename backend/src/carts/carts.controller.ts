import { Body, Controller, Get, Put, Req } from '@nestjs/common';
import { CartsService } from './carts.service.js';
import { type AuthenticatedRequest } from '../common/middleware/logger.middleware.js';
@Controller('carts')
export class CartsController {
    constructor(private readonly cartsService: CartsService){}
    @Get('')
    async getOrCreateCart(
        @Req() userId: number)
    {
        return await this.cartsService.getCart(userId)
    }
    @Put('')

    async addToCart(
        @Body() productId: number,
        @Req() req: AuthenticatedRequest)
    {
        return await this.cartsService.addToCart(productId, req?.user.id)
    }
}
