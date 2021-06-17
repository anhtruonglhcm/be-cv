import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ThrottlerModuleOptions, ThrottlerOptionsFactory } from '@nestjs/throttler';

@Injectable()
export class ThrottlerConfigService implements ThrottlerOptionsFactory {
    constructor(private readonly configService: ConfigService) { }

    createThrottlerOptions(): ThrottlerModuleOptions {
        return this.configService.get('throttler')
    }
}