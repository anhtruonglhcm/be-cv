import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards';
import { RolesGuard } from 'src/guards/roles.guard';
import { Role } from 'src/modules/users/enums';
import { Roles } from './roles.decorator';

export const Authorize = (...roles: Role[]) => applyDecorators(
    ApiBearerAuth(),
    Roles(...roles),
    UseGuards(JwtAuthGuard, RolesGuard),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
);