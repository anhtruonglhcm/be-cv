import { Module } from '@nestjs/common';
import { FacebookAccountsService } from './facebook-accounts.service';
import { FacebookAccountsController } from './facebook-accounts.controller';

@Module({
  controllers: [FacebookAccountsController],
  providers: [FacebookAccountsService]
})
export class FacebookAccountsModule {}
