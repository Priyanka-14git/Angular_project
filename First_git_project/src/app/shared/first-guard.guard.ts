import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanLoadFn } from '@angular/router';
import { GuardServiceService } from '../services/guard-service.service';

export const firstGuardGuard: CanActivateFn = (route, state) => {
  const guardServ=inject(GuardServiceService);
  return guardServ.loginMethod();
};

export const secondGuardGuard: CanActivateChildFn = (route, state) => {
  const guardServ1=inject(GuardServiceService);
  return guardServ1.childGuardMethod();
};

export const thirdGuardGuard: CanLoadFn = (route, state) => {
  const guardServ1=inject(GuardServiceService);
  return guardServ1.loadGuardMethod();
};


