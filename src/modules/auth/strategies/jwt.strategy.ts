import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserPayloadDto } from "src/common/dto";
import { AuthenticationService } from "src/modules/auth/authentication.service";
import { HttpContextService } from "src/shared/services/http-context.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly authenticationService: AuthenticationService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>("jwt.secretKey"),
    });
  }

  async validate(payload: any) {
    const { iat, sub: userId } = payload;
    const [
      refreshToken,
      created,
    ] = await this.authenticationService.getRefreshToken(userId);
    if (!refreshToken || iat < created) throw new UnauthorizedException();
    const user = new UserPayloadDto({ ...payload, userId });
    HttpContextService.setAuthUser(user);
    return user;
  }
}
