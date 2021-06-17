import { Global, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/modules/users/users.module";
import { JwtConfigService } from "src/shared/config";
import { EmailService } from "src/shared/services/email.service";
import { CqrsModule } from "@nestjs/cqrs";

const providers = [EmailService];

@Global()
@Module({
  providers,
  imports: [
    UsersModule,
    PassportModule,
    CqrsModule,
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
  ],
  exports: [...providers, PassportModule, JwtModule, CqrsModule],
})
export class SharedModule {}
