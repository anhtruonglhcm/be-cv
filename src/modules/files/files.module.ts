import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as cryptoRandomString from 'crypto-random-string';

@Module({
  imports: [MulterModule.register({
    storage: diskStorage({
      destination: './public/uploads',
      filename: (_req, file, callback) => {
        callback(null, `${cryptoRandomString({ length: 16 })}${extname(file.originalname)}`);
      },
    }),
    limits: {
      fileSize: 100_000_000
    }
  })],
  controllers: [FilesController],
  providers: [FilesService]
})
export class FilesModule { }
