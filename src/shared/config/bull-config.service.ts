import { SharedBullConfigurationFactory } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { QueueOptions } from 'bull';

@Injectable()
export class BullConfigService implements SharedBullConfigurationFactory {
    constructor(private readonly configService: ConfigService) { }

    createSharedConfiguration(): QueueOptions {
        return {
            redis: this.configService.get('redis')
        };
    }
}