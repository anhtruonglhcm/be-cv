import { IPaginationOptions, paginate } from "nestjs-typeorm-paginate";
import {
  BaseEntity,
  FindConditions,
  FindManyOptions,
  Repository,
} from "typeorm";

export abstract class AbstractPaginationRepository<
  T extends BaseEntity
> extends Repository<T> {
  async paginate(
    options: IPaginationOptions,
    searchOptions?: FindConditions<T> | FindManyOptions<T>
  ) {
    return paginate<T>(this, options, searchOptions);
  }
}
