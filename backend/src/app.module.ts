import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';
import { LoggerMiddleware } from './common/middleware/logger.middleware.js';
import { ProductsModule } from './products/products.module.js';
import { RolesGuard } from './common/guards/roles.guard.js';
import { CartsModule } from './carts/carts.module.js';
import { OrdersService } from './orders/orders.service.js';
import { OrdersController } from './orders/orders.controller.js';
import { OrdersModule } from './orders/orders.module.js';
export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'backend',
    }),

    PrismaModule,
    UsersModule,
    AuthModule,
    ProductsModule,
    CartsModule,
    OrdersModule,
  ],
  controllers: [AppController, OrdersController],
  providers: [AppService, RolesGuard]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .exclude('auth/(.*)','products/all')
    .forRoutes('*');
  }
}