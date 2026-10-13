import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Status } from '../generated/prisma/enums.js';

@Injectable()
export class OrdersService {
    constructor(private readonly prisma:PrismaService){}
    async checkOut(customerId: number){
        if (!customerId) throw new UnauthorizedException("your session have expired, pls sign in")
        return this.prisma.$transaction(async tx =>{
            //1 get cart
            const cart = await tx.cart.findFirst({where:{customerId}, select:{id:true}})
            if (!cart) throw new NotFoundException("not found cart")
            //2 get item
            const items = await tx.cartItem.findMany({
                where:{
                    cartId: cart.id
                },
                select: {
                    quantity:true,
                    productId:true,
                    product: {
                        select: {
                            id:true,
                            name:true,
                            price:true,
                            shopId:true
                        }
                    }
                }
            })
            if (items.length===0) throw new NotFoundException("not found any item")
            //3 check validate product and init total
            for (const item of items) {
                if (!item.product) throw new NotFoundException(`not found product ID ${item.productId}`)
                if (item.quantity<=0) throw new BadRequestException("quantity not validate")
            }
            
            //4 check stock and condition
            for (const item of items) {
                const result = await tx.product.updateMany({
                    where:{
                        id: item.productId,
                        quantity: {gte: item.quantity}
                    },
                    data:{
                        quantity: {
                            decrement: item.quantity
                        }
                    }
                })
                if (result.count!==1) throw new BadRequestException("not enough stock")
            }
            //5 create order
            const shops = [...new Set(items.map(item=>item.product.shopId))]
            for (const shop of shops ) {
                let total = 0
                for (const item of items) {
                    if (item.product.shopId===shop) {total += item.quantity*item.product.price}
                }
                const order = await tx.order.create({
                    data: {
                        customerId,
                        shopId: shop,
                        status: Status.pending,
                        total
                    }
                })
                //6 create details order
                const shopItems = items.filter(item => item.product.shopId===shop)
                await tx.orderItem.createMany({
                    data: shopItems.map(item=> { return {
                        orderId:order.id,
                        productId: item.product.id,
                        quantity: item.quantity,
                        price: item.product.price
                    }
                    })
                })
                
            }
            await tx.cartItem.deleteMany({where:{cartId:cart.id}})
            return {message: "successful checkout", item:items.map(item=>item.product.name)}
            
        })
    }
    async getOrders(customerId:number) {
        return await this.prisma.order.findMany({
            where: {customerId},
            select: {
                id:true,
                shop: {
                    select: {
                        userName:true
                    }
                },
                status:true,
                total:true,
                createdAt:true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
    }
    async getItem(orderId: number, customerId: number) {
        const order = await this.prisma.orderItem.findMany({
            where: {
                orderId,
                order: {customerId}
            },
            select: {
                id:true,
                product: {
                    select: {
                        name:true
                    }
                },
                quantity:true,
                price:true
            }
        })
        if (!order) throw new UnauthorizedException("you can not read people's another order ")
        return order
    }
}
