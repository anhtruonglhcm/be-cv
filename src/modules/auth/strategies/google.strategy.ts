import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { LoginProvider } from 'src/modules/users/enums';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, LoginProvider.Google) {
    constructor(configService: ConfigService) {
        super({
            ...configService.get('google'),
            callbackURL: `${configService.get('host')}/v1/auth/google/callback`,
            scope: ['email', 'profile'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
        const { emails, photos, id, displayName } = profile;
        const user = {
            providerKey: id,
            email: emails[0].value,
            fullName: displayName,
            avatar: photos[0].value,
        };
        done(null, user);
    }
}