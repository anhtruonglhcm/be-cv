import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { isEmpty } from 'lodash';
import { ROLES_KEY } from 'src/decorators/roles.decorator';
import { User } from 'src/modules/users/entities';
import { Role } from 'src/modules/users/enums';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles || isEmpty(requiredRoles.length)) { return true; }
        const user = <User>context.switchToHttp().getRequest().user;
        if (!user) throw new UnauthorizedException();
        return requiredRoles.some(role => user.role === role);
    }
}