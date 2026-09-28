// import { Test, TestingModule } from '@nestjs/testing';
// import { AuthController } from './auth.controller.js';
// import { AuthService } from './auth.service.js';
// import type { Response } from 'express';
// import { vi } from 'vitest';
// describe('AuthController', () => {
//   let controller: AuthController;
//   let authService: AuthService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [AuthController],
//       providers: [
//         {
//           provide: AuthService,
//           useValue: {
//             signUp: vi.fn(),
//             signIn: vi.fn(),
//           },
//         },
//       ],
//     }).compile();

//     controller = module.get<AuthController>(AuthController);
//     authService = module.get<AuthService>(AuthService);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });

//   it('should call authService.signUp', async () => {
//     const data = {
//       userName: 'Nguyen Van A',
//       email: 'a@gmail.com',
//       password: '123456',
//       role: 'customer',
//     };

//     authService.signUp = vi.fn().mockResolvedValue({
//       message: 'Đăng ký thành công',
//     });

//     const result = await controller.signUp(data);

//     expect(authService.signUp).toHaveBeenCalledWith(data);

//     expect(result).toEqual({
//       message: 'Đăng ký thành công',
//     });
//   });

//   it('should sign in and set refresh token cookie', async () => {
//     const data = {
//       email: 'a@gmail.com',
//       password: '123456',
//     };

//     authService.signIn = vi.fn().mockResolvedValue({
//       accessToken: 'access-token-123',
//       refreshToken: 'refresh-token-456',
//       message: 'Đăng nhập thành công',
//     });

//     const res = {
//       cookie: vi.fn(),
//     } as unknown as Response;

//     const result = await controller.signIn(data, res);

//     expect(authService.signIn).toHaveBeenCalledWith(data);

//     expect(res.cookie).toHaveBeenCalledWith(
//       'refreshToken',
//       'refresh-token-456',
//       {
//         httpOnly: true,
//         secure: false,
//         sameSite: 'strict',
//       },
//     );

//     expect(result).toEqual({
//       accessToken: 'access-token-123',
//       message: 'Đăng nhập thành công',
//     });
//   });
// });

import {Test, TestingModule} from '@nestjs/testing'
import { AuthController } from './auth.controller.js'
import { AuthService } from './auth.service.js'
import type { Response } from 'express'
import {vi} from 'vitest'
describe('AuthController',()=>{
  let controller: AuthController
  let authService: AuthService
  beforeEach(async ()=>{
    const module:TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers:[{
        provide: AuthService,
        useValue: {
          signUp: vi.fn(),
          signIn: vi.fn()
        }
      }]
    }).compile()
    controller = module.get<AuthController>(AuthController)
    authService= module.get<AuthService>(AuthService)
  })
  it('should be defined hihihi', ()=>{
    expect(controller).toBeDefined()
  })
})