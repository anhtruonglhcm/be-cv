import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-facebook';
import { first } from 'lodash';
import { LoginProvider } from 'src/modules/users/enums';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, LoginProvider.Facebook) {
    constructor(configService: ConfigService) {
        super({
            ...configService.get('facebook'),
            callbackURL: `${configService.get('host')}/v1/auth/facebook/callback`,
            scope: 'email',
            profileFields: ['emails', 'displayName', 'photos'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile, done: (err: any, user: any, info?: any) => void): Promise<any> {
        const { emails, photos, id, displayName } = profile;
        const user = {
            providerKey: id,
            email: first(emails)?.value,
            fullName: displayName,
            avatar: photos[0].value,
        };
        done(null, user);
    }
}