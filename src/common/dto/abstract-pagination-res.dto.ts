import { ApiProperty } from '@nestjs/swagger';
import { IPaginationMeta } from 'nestjs-typeorm-paginate';

export class PaginationMeta implements IPaginationMeta {

    @ApiProperty()
    itemCount: number;

    @ApiProperty()
    totalItems: number;

    @ApiProperty()
    itemsPerPage: number;

    @ApiProperty()
    totalPages: number;

    @ApiProperty()
    currentPage: number;
}

export abstract class AbstractPaginatonResDto<T> {

    items: T[]

    @ApiProperty({ type: () => PaginationMeta })
    meta: PaginationMeta;

    constructor(items: T[], meta: IPaginationMeta) {
        this.items = items;
        this.meta = meta;
    }
}
