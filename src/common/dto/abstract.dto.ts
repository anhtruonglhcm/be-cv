import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export abstract class AbstractDto {

    @AutoMap()
    @ApiProperty()
    id: string;

    @AutoMap()
    @ApiProperty()
    created: Date;

    @AutoMap()
    @ApiProperty()
    lastModified: Date;
}