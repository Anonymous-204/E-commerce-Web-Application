import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class OrdersService {
    constructor(private readonly prisma:PrismaService){}
    async checkOut(customerId: number){
        const cart = await this.prisma.cart.findFirst({where: {customerId}})
        if (!cart) throw new NotFoundException("not found cart")
        const item = await this.prisma.cartItem.findMany({
            where: {
                cartId: cart.id
            }
        })
        if (item.length===0) throw new NotFoundException("your cart's empty, plz add product first")
        await this.prisma.
    }
}
