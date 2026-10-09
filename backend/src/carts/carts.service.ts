import { Injectable, NotFoundException } from '@nestjs/common';
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
    async getItems(customerId: number) {
        const cart = await this.getCart(customerId)
        const data = await this.prisma.cartItem.findMany({
            where:{
                cartId:cart.cart.id
            }, select: {
                id:true,
                quantity:true,
                product: {
                    select: {
                        id:true,
                        name: true,
                        image: true,
                        price:true
                    }
                }
            }
        })
        const item = data.map(data=>{
            return {
            itemId: data.id,
            productId: data.product.id,
            quantity: data.quantity,
            name: data.product.name,
            image: data.product.image,
            price: data.product.price
            }
        })
        return item;
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
                    quantity:{increment: 1}
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
    async clearCart(customerId: number) {
        const cart = await this.prisma.cart.findUnique({
            where: {customerId}
        })
        if (!cart) throw new NotFoundException("cart not found")
        await this.prisma.cartItem.deleteMany({where:{cartId: cart.id}})
        return {message: "cleared cart successful"}
    }
    //plus and decrease function
}
