import { DeleteResult } from "typeorm";

export interface IBaseService<T> {
  findAll(): Promise<T[]>;

  findById(id: number): Promise<T>;

  findByIds(ids: number[]): Promise<T[]>;

  create(data: any): Promise<T>;

  update(id: number, data: any): Promise<T>;

  delete(id: number): Promise<DeleteResult>;
}
