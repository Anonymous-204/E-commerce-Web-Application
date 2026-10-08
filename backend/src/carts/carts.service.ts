import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CartsService {
    constructor(private readonly prisma: PrismaService) {}
    async getCart(customerId: number){
        let cart = await this.prisma.cart.findUnique({where:{customerId}})
        let message:string = "got cart successful"
        if (!cart) {
            cart = await this.prisma.cart.create({
                data: {
                    customerId
                }
            })
            message = "created cart successful"
        }
        return {cart, message}
    }
    async addToCart(productId: number, userId: number) {
        const cart = await this.getCart(userId)
        const item = await this.prisma.cartItem.findFirst({
            where: {
                productId,
                cartId :cart.cart.id
            }
        })
        if (item) {
            await this.prisma.cartItem.update({
                where: {
                    id: item.id
                },
                data: {
                    quantity:item.quantity+1
                }
            })
        } else {
            await this.prisma.cartItem.create({
                data: {
                    cartId: cart.cart.id,
                    productId: productId,
                    quantity: 1
                }
            })
        }
        return {message: "thêm vào giỏ thành công"}
    }
}
