import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants, TPayload } from 'src/utils';

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConstants.refreshSecret,
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: TPayload) {
    const refreshToken = req.get('Authorization').split(' ')[1];
    return { ...payload, refreshToken };
  }
}
