import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    // const usertoken = ctx.req.headers.authorization;
    // const token = usertoken.split(' ');
    // const decoded = jwt.verify(token[1], 'secret-key');
    // console.log(decoded);
    const request = ctx.switchToHttp().getRequest();
    console.log(request.headers.authorization);
    const usertoken = request.headers.authorization;
    const token = usertoken.split(' ');
    const decoded = jwt.verify(token[1], 'secretKey');
    console.log(decoded);
    return request.user;
  },
);

export const CurrentUser = createParamDecorator(
  (data, [root, args, ctx, info]) => ctx.req.user,
);