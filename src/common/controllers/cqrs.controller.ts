import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

@Injectable()
export class CQRSController {
    constructor(
        protected readonly commandBus: CommandBus,
        protected readonly queryBus: QueryBus,
    ) { }
}