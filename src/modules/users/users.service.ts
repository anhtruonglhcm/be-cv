import { Injectable } from '@nestjs/common';
import { HttpContextService } from 'src/shared/services/http-context.service';
import { User } from './entities';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {

  constructor(
    public readonly usersRepository: UsersRepository,
  ) { }

  findCurrentUser(): Promise<User> {
    return this.usersRepository.findOneOrFail(HttpContextService.getAuthUserId());
  }

  findOneByUsername(username: string): Promise<User> {
    return this.usersRepository.findOne({ username });
  }
}
