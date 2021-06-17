import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { FacebookStrategy } from "./strategies/facebook.strategy";
import { GoogleStrategy } from "./strategies/google.strategy";
import { UsersModule } from "../users/users.module";
import { SharedModule } from "src/shared/shared.module";
import { AuthenticationService } from "./authentication.service";
import { JwtRefreshStrategy } from "./strategies/jwt-refresh-token.strategy";
import { JwtStrategy } from "./strategies/jwt.strategy";

@Module({
  imports: [UsersModule, SharedModule],
  providers: [
    FacebookStrategy,
    GoogleStrategy,
    JwtStrategy,
    JwtRefreshStrategy,
    AuthenticationService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
