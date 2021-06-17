import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from 'src/modules/users/users.service';
import { HttpContextService } from 'src/shared/services/http-context.service';
import { UserPayloadDto } from 'src/common/dto';

@Injectable()
export class ApiKeyGuard implements CanActivate {

    constructor(private readonly usersService: UsersService) { }

    async canActivate(context: ExecutionContext) {
        const request = <Request>context.switchToHttp().getRequest();
        const apiKey = <string>request.query?.apiKey;
        const user = await this.usersService.usersRepository.findOne({ apiKey });
        if (!user) throw new ForbiddenException();
        HttpContextService.setAuthUser(new UserPayloadDto({ userId: user.id, role: user.role }))
        return true;
    }
}
