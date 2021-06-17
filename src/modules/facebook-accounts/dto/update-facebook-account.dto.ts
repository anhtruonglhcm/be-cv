import { PartialType } from '@nestjs/mapped-types';
import { CreateFacebookAccountDto } from './create-facebook-account.dto';

export class UpdateFacebookAccountDto extends PartialType(CreateFacebookAccountDto) {}
