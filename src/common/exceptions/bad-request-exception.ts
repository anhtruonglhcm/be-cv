import { BadRequestException } from '@nestjs/common';

export class TBadRequestException extends BadRequestException {
    constructor(errors: { [key: string]: string[] }) {
        super({
            statusCode: 400,
            message: 'Bad Request',
            errors
        });
    }
}