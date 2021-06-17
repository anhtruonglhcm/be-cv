import { BadRequestException, Param } from '@nestjs/common';
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

export const ParamEnum = (property: string, enumType: any) => Param(property, new ParseEnumPipe(enumType));

@Injectable()
export class ParseEnumPipe implements PipeTransform {

    constructor(public readonly enumType: any) { }

    transform(value: any, metadata: ArgumentMetadata) {
        const keys = Object.keys(this.enumType);
        if (!keys.includes(value)) {
            throw new BadRequestException(`${metadata.type} '${metadata.data}': ${keys.join(', ')}`);
        }
        return value;
    }
}