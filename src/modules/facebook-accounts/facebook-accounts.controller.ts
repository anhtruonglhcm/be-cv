import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FacebookAccountsService } from './facebook-accounts.service';
import { CreateFacebookAccountDto } from './dto/create-facebook-account.dto';
import { UpdateFacebookAccountDto } from './dto/update-facebook-account.dto';

@Controller('facebook-accounts')
export class FacebookAccountsController {
  constructor(private readonly facebookAccountsService: FacebookAccountsService) {}

  @Post()
  create(@Body() createFacebookAccountDto: CreateFacebookAccountDto) {
    return this.facebookAccountsService.create(createFacebookAccountDto);
  }

  @Get()
  findAll() {
    return this.facebookAccountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facebookAccountsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacebookAccountDto: UpdateFacebookAccountDto) {
    return this.facebookAccountsService.update(+id, updateFacebookAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facebookAccountsService.remove(+id);
  }
}
