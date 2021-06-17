import { DeleteResult, Repository } from "typeorm";
import { BaseEntity } from "typeorm";
import { IBaseService } from "./i.base.service";

export abstract class AbstractService<
  T extends BaseEntity,
  R extends Repository<T>
> implements IBaseService<T> {
  protected readonly repository: R;

  constructor(repository: R) {
    this.repository = repository;
  }

  findAll(): Promise<T[]> {
    return this.repository.find();
  }
  findById(id: number): Promise<T> {
    return this.repository.findOne(id);
  }
  findByIds(ids: number[]): Promise<T[]> {
    return this.repository.findByIds(ids);
  }
  create(data: any): Promise<T> {
    return this.repository.save(data);
  }
  async update(id: number, data: any): Promise<T> {
    await this.repository.update(id, data);
    return this.findById(id);
  }
  delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
