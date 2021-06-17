import { Injectable } from "@nestjs/common";
import { HttpContextService } from "src/shared/services/http-context.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { OrdersRepository } from "./orders.repository";

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async create(createOrderDto: CreateOrderDto) {
    const entity = this.ordersRepository.create({
      ...createOrderDto,
      userId: HttpContextService.getAuthUserId(),
    });
    await this.ordersRepository.save(entity);
  }

  findAll() {
    this.ordersRepository.paginate(
      { page: 1, limit: 1 },
      { userId: HttpContextService.getAuthUserId() }
    );
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }
}
