import { AbstractPaginationRepository } from "src/common/repositories";
import { IBaseRepository } from "src/common/repositories/i.base.repository";
import { EntityRepository } from "typeorm";
import { CreateLocationDto } from "./dto/create-location.dto";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { Location } from "./entities/location.entity";

@EntityRepository(Location)
export class LocationsRepository
  extends AbstractPaginationRepository<Location>
  implements IBaseRepository<Location> {
  async createData(data: CreateLocationDto): Promise<Location> {
    const { name, isActive } = data;
    const location = new CreateLocationDto();
    location.name = name;
    location.isActive = isActive;
    await this.save(location);

    return location as Location;
  }

  async updateData(id: number, data: UpdateLocationDto): Promise<Location> {
    const { name, isActive } = data;
    const location = await this.findOne(id);
    location.name = name;
    location.isActive = isActive;
    await this.save(location);

    return location;
  }

  async destroy(locationId: number): Promise<void> {
    const product = await this.findOne(locationId);
    await this.remove(product);
  }
}
