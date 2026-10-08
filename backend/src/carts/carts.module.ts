import { Module } from '@nestjs/common';
import { CartsService } from './carts.service.js';
import { CartsController } from './carts.controller.js';

@Module({
  providers: [CartsService],
  controllers: [CartsController]
})
export class CartsModule {}
