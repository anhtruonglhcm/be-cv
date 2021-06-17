import { Role } from 'src/modules/users/enums';

export class UserPayloadDto {
    userId: string;
    role: Role;

    constructor(partial: Partial<UserPayloadDto>) {
        Object.assign(this, partial);
    }
}