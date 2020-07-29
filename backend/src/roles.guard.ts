import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IGrant } from 'models';
import { UserEntity } from 'entities';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    return this.matchRoles(roles, user);
  }

  matchRoles(grants: string[], user: UserEntity) {
    return grants.some(grant => grant.toUpperCase() === IGrant[user.grant]);
  }
}
