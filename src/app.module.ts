import { LocationsModule } from "./modules/locations/locations.module";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import configuration from "./config/configuration";
import { AuthModule } from "./modules/auth/auth.module";
import { BullModule } from "@nestjs/bull";
import { AutomapperModule } from "@automapper/nestjs";
import { classes } from "@automapper/classes";
import { APP_GUARD } from "@nestjs/core";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import {
  BullConfigService,
  ThrottlerConfigService,
  TypeORMConfigService,
} from "./shared/config";
import { join } from "path";
import { UsersModule } from "./modules/users/users.module";
import { FilesModule } from "./modules/files/files.module";
import { HealthModule } from "./modules/health/health.module";
import { ServeStaticModule } from "@nestjs/serve-static";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`, ".env"],
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeORMConfigService,
    }),
    BullModule.forRootAsync({
      useClass: BullConfigService,
    }),
    ThrottlerModule.forRootAsync({
      useClass: ThrottlerConfigService,
    }),
    AutomapperModule.forRoot({
      options: [{ name: "mapper", pluginInitializer: classes }],
      singular: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"),
    }),
    AuthModule,
    UsersModule,
    FilesModule,
    HealthModule,
    LocationsModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
