import { BaseEntity } from "typeorm";
import { AbstractPaginationRepository } from "./abstract-pagination.repository";

export abstract class AbstractRepository<
  T extends BaseEntity
> extends AbstractPaginationRepository<T> {}
