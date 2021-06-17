import { Injectable } from '@nestjs/common';
import { CreateFacebookAccountDto } from './dto/create-facebook-account.dto';
import { UpdateFacebookAccountDto } from './dto/update-facebook-account.dto';

@Injectable()
export class FacebookAccountsService {
  create(createFacebookAccountDto: CreateFacebookAccountDto) {
    return 'This action adds a new facebookAccount';
  }

  findAll() {
    return `This action returns all facebookAccounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facebookAccount`;
  }

  update(id: number, updateFacebookAccountDto: UpdateFacebookAccountDto) {
    return `This action updates a #${id} facebookAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} facebookAccount`;
  }
}
