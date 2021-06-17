import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FilesService {

  private readonly host: string;

  constructor(configService: ConfigService) {
    this.host = configService.get('host');
  }

  mapFile(file: Express.Multer.File) {
    return {
      path: `${this.host}/uploads/${file.filename}`,
      size: file.size,
    };
  }
}
