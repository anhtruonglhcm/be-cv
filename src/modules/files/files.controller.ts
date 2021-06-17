import { Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { ApiController, ApiFile, ApiMultiFile, Authorize } from 'src/decorators';

@Authorize()
@ApiController('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) { }

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiFile()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.filesService.mapFile(file);
  }

  @Post('uploads')
  @ApiConsumes('multipart/form-data')
  @ApiMultiFile()
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    return files.map(file => this.filesService.mapFile(file));
  }
}
