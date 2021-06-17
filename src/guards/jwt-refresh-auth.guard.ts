import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JWT_REFRESH_TOKEN } from 'src/modules/auth/strategies/jwt-refresh-token.strategy';

@Injectable()
export class JwtRefreshGuard extends AuthGuard(JWT_REFRESH_TOKEN) { }