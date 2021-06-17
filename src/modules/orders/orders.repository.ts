import { AbstractPaginationRepository } from "src/common/repositories";
import { EntityRepository } from "typeorm";
import { Order } from "./entities/order.entity";

@EntityRepository(Order)
export class OrdersRepository extends AbstractPaginationRepository<Order> {}
