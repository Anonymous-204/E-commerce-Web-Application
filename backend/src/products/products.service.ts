import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateProductDto } from './products.dto.js';

@Injectable()
export class ProductsService {
    constructor(private readonly prisma: PrismaService) {}
    async getProductInfo(productId: number) {
        const data = await this.prisma.product.findUnique({
            where: {
                id: productId
            },
            select: {
                id: true,
                name: true,
                price: true,
                description: true,
                image: true,
                quantity:true,
                category: { 
                    select: {
                        id: true,
                        name: true,
                    },
                },
                brand: {
                    select: {
                        id: true,
                        name: true,
                    },
                }
            },
        });
        if (!data) throw new NotFoundException("Product not found");
        const product = {
            id: data.id,
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            description: data.description,
            image: data.image,
            category: data.category.name,
            brand: data.brand.name,
        };
        return product;
    }
    async getAllProducts() {
        const data = await this.prisma.product.findMany({
            select: {
                id: true,
                name: true,
                price: true,
                image: true,
            },
        });
        const products = data.map((product) => ({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
        }));
        return products;
    }
    async getProductsByShopId(shopId: number) {
        const data = await this.prisma.product.findMany({
            where: { shopId },
            select: {
                id: true,
                name: true,
                price: true,
                image: true,
            }
        });
        return data;
    }
    async getProductsByCategoryId(categoryId: number) {
        const data = await this.prisma.product.findMany({
            where: { categoryId },
            select: {
                id: true,
                name: true,
                price: true,
                image: true,
            }
        });
        return data;
    }
    async getProductsByBrandId(brandId: number) {
        const data = await this.prisma.product.findMany({
            where: { brandId },
            select: {
                id: true,
                name: true,
                price: true,
                image: true,
            }
        });
        return data;
    }
    async getNameInfoBrandCategory() {
        const [brandData, categoryData] = await Promise.all([
            this.prisma.brand.findMany({
                select: {
                    id: true,
                    name: true,
                }
            }),
            this.prisma.category.findMany({
                select: {
                    id: true,
                    name: true,
                }
            })
        ]);
        return {brandData, categoryData};
    }
    async createProduct(shopId: number, data: CreateProductDto) {
        const { size, quantity, SKU, name, price, description, image, categoryId, brandId } = data;
        const product = await this.prisma.product.create({
            data: {
                shopId,
                SKU,
                name,
                price,
                size,
                quantity,
                description,
                image,
                categoryId,
                brandId
            }
        });
        return {product ,message: "product created successful "};
    }
    async createBrand(brandName: string, description?: string) {
        const data = await this.prisma.brand.create({
            data: {
                name: brandName,
                description
            }
        })
        return {data, message: "brand created successful"}
    }
    async createCategory(categoryName: string, description?:string){
        const data = await this.prisma.category.create({
            data: {
                name: categoryName,
                description
            }
        })
        return {data, message: "category created successful"}
    }
}