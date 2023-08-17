import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService,
    private localStorageService:LocalStorageService,
    private toastr:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.localStorageService.getToken();

    if (accessToken){
      request = request.clone({headers:request.headers.set("Authorization","Bearer "+accessToken), withCredentials:true});
      return next.handle(request).pipe(
        catchError(error=>{
          if (error.status === 401){
            return this.authService.refresh(accessToken).pipe(
              switchMap((res)=>{
                if (res.token){
                  this.localStorageService.setToken(res.token);
                  request = request.clone({
                    setHeaders: {
                      Authorization:"Bearer "+res.token
                    },
                    withCredentials: true
                  });
                  return next.handle(request);
                }
                else {
                  this.authService.logout();
                  return throwError(()=> new Error());
                }
              })
            );
          }
          return throwError(()=> new Error());
        })
      )
    }
    else {
      return next.handle(request.clone({withCredentials:true}));
    }
  }
}
