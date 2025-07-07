import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class PractInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Hi I am in interceptor");
    var cloneRequest=request.clone({
      setHeaders:{
        'JWTToken':'duiqwh212139281isauh'
      }
    })
    return next.handle(cloneRequest).pipe(tap((event:HttpEvent<any>)=>console.log(event)));
  }
}
