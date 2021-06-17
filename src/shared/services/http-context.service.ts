import * as httpContext from "express-http-context";
import { UserPayloadDto } from "src/common/dto";

export class HttpContextService {
  private static authUserKey = "user";

  static setAuthUser(user: UserPayloadDto): void {
    httpContext.set(this.authUserKey, user);
  }

  static getAuthUser(): UserPayloadDto {
    return httpContext.get(this.authUserKey);
  }

  static getAuthUserId(): string {
    return this.getAuthUser()?.userId;
  }
}
