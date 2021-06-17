import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { AbstractService } from "src/common/services/abstract-service";
import { CreateLocationDto } from "./dto/create-location.dto";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { Location } from "./entities/location.entity";
import { LocationsRepository } from "./locations.repository";

@Injectable()
export class LocationsService extends AbstractService<
  Location,
  LocationsRepository
> {
  constructor(private locationsRepository: LocationsRepository) {
    super(locationsRepository);
  }

  async findAll(): Promise<Location[]> {
    return await this.locationsRepository.find({});
  }

  async findById(locationId: number): Promise<Location> {
    return await this.locationsRepository.findOne(locationId);
  }

  async findByIds(locationIds: number[]): Promise<Location[]> {
    return await this.locationsRepository.findByIds(locationIds);
  }

  async create(location: CreateLocationDto): Promise<Location> {
    return await this.locationsRepository.createData(location);
  }

  async update(locationId: number, location: UpdateLocationDto) {
    return await this.locationsRepository.updateData(locationId, location);
  }

  async delete(locationId: number): Promise<any> {
    return await this.locationsRepository.delete(locationId);
  }
}
