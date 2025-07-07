import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanDeactivateFn, CanLoadFn, CanMatchFn, ResolveFn } from '@angular/router';
import { GuardServiceService } from '../services/guard-service.service';
import { Observable } from 'rxjs';

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

export const fourthGuard: CanMatchFn = (route, state) => {
  const guardServ1=inject(GuardServiceService);
  return guardServ1.canMatchMethod('admin');
};

export const fifthGuard: CanMatchFn = (route, state) => {
  const guardServ1=inject(GuardServiceService);
  return guardServ1.canMatchMethod('student');
};

export const sixthGuard: CanDeactivateFn<deactInterphase> = (component) => {
  return component.saveMethod?component.saveMethod():true;
};

export const seventhGuard: ResolveFn <any>= (route,state) => {
  const obj1=inject(GuardServiceService);
  console.log("I am data from resolve guard: ",obj1.resolveMethod());
  return obj1.resolveMethod();
};



export interface deactInterphase{
  saveMethod:()=>boolean | Observable<boolean>
}


