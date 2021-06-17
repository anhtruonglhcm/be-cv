import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersRepository } from "./users.repository";
import { UserSubscriber } from "./user.subscriber";

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  providers: [UsersService, UserSubscriber],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
