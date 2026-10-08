import { Controller, Get, Post, Req, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './products.dto.js';
import { type AuthenticatedRequest } from '../common/middleware/logger.middleware.js';
import { Roles } from '../common/decorators/roles.decorator.js';
import { Role } from '../generated/prisma/enums.js';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
//===========================Products===============================//
    @Get('all')
    async getAllProducts() {
        return await this.productsService.getAllProducts();
    }
    
    @Get('info/:id')
    async getProductInfo(@Param('id', ParseIntPipe) id: number) {
        return await this.productsService.getProductInfo(id);
    }

    @Get('shop/:shopId')
    async getProductsByShopId(@Param('shopId') shopId: number) {
        return await this.productsService.getProductsByShopId(shopId);
    }

    @Get('category/:categoryId')
    async getProductsByCategoryId(@Param('categoryId') categoryId: number) {
        return await this.productsService.getProductsByCategoryId(categoryId);
    }

    @Get('brand/:brandId')
    async getProductsByBrandId(@Param('brandId') brandId: number) {
        return await this.productsService.getProductsByBrandId(brandId);
    }
    
    @Get('name-info')
    async getNameInfoBrandCategory() {
        return await this.productsService.getNameInfoBrandCategory();
    }

    @Post('create')
    @Roles(Role.shop)
    async createProduct(
        @Body() data: CreateProductDto,
        @Req() req: AuthenticatedRequest) {
        return await this.productsService.createProduct(req.user.id, data);
    }

    @Post("create-brand")
    @Roles(Role.admin)
    async createBrand(
        @Body() data: {name: string, description?:string}){
        return await this.productsService.createBrand(data.name, data.description)
    }

    @Post("create-category")
    @Roles(Role.admin)
    async createCategory(
        @Body() data :{name: string, description?:string}){
        return await this.productsService.createCategory(data.name, data.description)
    }
}