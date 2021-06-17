import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm/dist";
import { LocationsRepository } from "./locations.repository";
import { LocationsService } from "./locations.service";

@Module({
  imports: [TypeOrmModule.forFeature([LocationsRepository])],
  controllers: [],
  providers: [LocationsService],
})
export class LocationsModule {}
