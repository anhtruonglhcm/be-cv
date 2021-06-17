import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsOptional, IsInt, Min, Max,
    IsString, IsNotEmpty, IsEnum
} from 'class-validator';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { Order } from '../enums';

export abstract class PaginationOptionsDto implements IPaginationOptions {
    @ApiPropertyOptional({
        minimum: 1,
        default: 1,
    })
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @IsOptional()
    readonly page: number = 1;

    @ApiPropertyOptional({
        minimum: 1,
        maximum: 50,
        default: 10,
    })
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(50)
    @IsOptional()
    readonly limit: number = 10;

    @ApiPropertyOptional()
    @IsOptional()
    readonly sort: string;

    @ApiPropertyOptional({
        enum: Order,
        default: Order.ASC,
    })
    @IsEnum(Order)
    @IsOptional()
    readonly order: Order = Order.ASC;

    @ApiPropertyOptional()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly q?: string;
}