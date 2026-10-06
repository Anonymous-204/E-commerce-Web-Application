import {Injectable, NestMiddleware, UnauthorizedException} from "@nestjs/common";
import {Request, Response, NextFunction} from "express";
import { Role } from "../../generated/prisma/enums.js";
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  use(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    const [type, token] = authHeader?.split(' ') || ['', ''];
    if (type!=="Bearer"||!token) throw new UnauthorizedException("token sai định dạng hoặc không có")
    try {
      const payload = this.jwtService.verify(token, {secret: process.env.JWT_ACCESS_TOKEN_SECRET});
      req.user = {
        id: payload.id,
        role: payload.role
      }
    } catch (error) {
      throw new UnauthorizedException("token không hợp lệ")
    }
    next();
  }
}
export interface AuthenticatedRequest extends Request {
    user: {
        id: number,
        role: Role
    }
}