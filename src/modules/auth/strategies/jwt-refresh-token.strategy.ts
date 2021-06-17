import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { HttpContextService } from 'src/shared/services/http-context.service';
import { AuthenticationService } from '../authentication.service';
import { UserPayloadDto } from 'src/common/dto';

export const JWT_REFRESH_TOKEN = 'jwt-refresh-token';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, JWT_REFRESH_TOKEN) {
    constructor(
        configService: ConfigService,
        private readonly authenticationService: AuthenticationService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => <string>request.query?.refreshToken]),
            secretOrKey: configService.get<string>('jwtRefreshToken.secretKey'),
            passReqToCallback: true,
        });
    }

    async validate(request: Request, { sub: userId }) {
        const refreshToken = <string>request.query?.refreshToken;
        if (!await this.authenticationService.isValidRefreshToken(userId, refreshToken)) throw new UnauthorizedException();
        const user = new UserPayloadDto({ userId });
        HttpContextService.setAuthUser(user);
        return user;
    }
}