import {Injectable, NestMiddleware, UnauthorizedException} from "@nestjs/common";
import {Request, Response, NextFunction} from "express";
import { Role } from "../../generated/prisma/enums.js";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    const [type, token] = authHeader?.split(' ') || ['', ''];
    if (type!=="Bearer"||!token) throw new UnauthorizedException("token sai định dạng hoặc không có")
    next();
  }
}
export interface AuthenticatedRequest extends Request {
    user: {
        id: number,
        role: Role
    }
}