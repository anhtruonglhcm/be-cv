import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { STATUS_CODES } from 'http';
import { EntityNotFoundError } from 'typeorm';


@Catch(EntityNotFoundError)
export class EntityNotFoundFilter implements ExceptionFilter {

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        const errorMessage = 'Could not find any entity';
        const status = HttpStatus.NOT_FOUND;

        response.status(status).json({
            statusCode: status,
            error: STATUS_CODES[status],
            message: errorMessage,
        });
    }
}
