import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString } from "class-validator";
import { OrderType } from "../enums/order-type.enum";
import { Reaction } from "../enums/reaction.enum";

export class CreateOrderDto {
  @ApiProperty()
  @IsString()
  memoCode: string;

  @ApiProperty()
  @IsString()
  facebookId: string;

  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsEnum(OrderType)
  type: OrderType;

  @ApiPropertyOptional()
  @IsEnum(Reaction)
  reaction: Reaction;

  @ApiPropertyOptional()
  @IsString({ each: true })
  comments: string[];
}
