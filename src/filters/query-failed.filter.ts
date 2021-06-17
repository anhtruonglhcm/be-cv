import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { STATUS_CODES } from 'http';
import { QueryFailedError } from 'typeorm';
import { CONSTRAINT_ERRORS } from './constraint-errors';


@Catch(QueryFailedError)
export class QueryFailedFilter implements ExceptionFilter {

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        const errorMessage = CONSTRAINT_ERRORS[exception.constraint];

        const status = exception.constraint && exception.constraint.startsWith('UQ')
            ? HttpStatus.CONFLICT
            : HttpStatus.INTERNAL_SERVER_ERROR;

        response.status(status).json({
            statusCode: status,
            error: STATUS_CODES[status],
            message: errorMessage,
        });
    }
}
