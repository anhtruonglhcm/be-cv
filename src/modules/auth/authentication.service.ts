import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { User } from "../users/entities";
import { hashSync, compare } from "bcrypt";
import { UserPayloadDto } from "src/common/dto";

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  getJwtAccessToken(user: User) {
    const payload = new UserPayloadDto({ role: user.role });
    const jwt = this.configService.get<{
      secretKey: string;
      expirationTime: number;
    }>("jwt");
    return this.jwtService.sign(
      { ...payload },
      {
        secret: jwt.secretKey,
        expiresIn: jwt.expirationTime,
        subject: user.id,
      }
    );
  }

  getJwtRefreshToken(userId: string) {
    const jwtRefreshToken = this.configService.get<{
      secretKey: string;
      expirationTime: number;
    }>("jwtRefreshToken");
    return this.jwtService.sign(
      {},
      {
        secret: jwtRefreshToken.secretKey,
        expiresIn: jwtRefreshToken.expirationTime,
        subject: userId,
      }
    );
  }

  async login(user: User) {
    const refreshToken = this.getJwtRefreshToken(user.id);
    await this.setRefreshToken(user.id, refreshToken);
    const accessToken = this.getJwtAccessToken(user);
    // return new AccessTokenDto({ accessToken, refreshToken });
  }

  logout(userId: string) {
    // return this.cacheManager.del(this.getRefreshTokenKey(userId));
  }

  async isValidRefreshToken(userId: string, refreshToken: string) {
    const [refreshTokenHash] = await this.getRefreshToken(userId);
    return compare(refreshToken, refreshTokenHash);
  }

  setRefreshToken(userId: string, value: string) {
    // return this.cacheManager.set<[string, number]>(
    //   this.getRefreshTokenKey(userId),
    //   [hashSync(value, 10), Math.floor(Date.now() / 1000)],
    //   {
    //     ttl: this.configService.get<number>("jwtRefreshToken.expirationTime"),
    //   }
    // );
    return "bb";
  }

  getRefreshToken(userId: string) {
    return "bbb";
    // return this.cacheManager.get<[string, number]>(
    //   this.getRefreshTokenKey(userId)
    // );
  }

  private getRefreshTokenKey(userId: string) {
    return `refresh-token:${userId}`;
  }
}
