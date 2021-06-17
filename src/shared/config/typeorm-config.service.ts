import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from '../strategies/snake-naming.strategy';

@Injectable()
export class TypeORMConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) { }

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
        const database = this.configService.get('database');
        return {
            name: connectionName,
            type: 'postgres',
            ...database,
            namingStrategy: new SnakeNamingStrategy(),
            entities: [__dirname + '/../../modules/**/*.entity{.ts,.js}'],
            logging: ['query', 'error'],
            synchronize: true,
        }
    }
}