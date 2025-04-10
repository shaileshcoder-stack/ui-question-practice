import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor( private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let message = 'Something went wrong';

        if(error.status ===0){
          message = 'Backend not reachable';
        } else if(error.status ===400) {
          message = error.message || 'bad request'
        } else if (error.status === 401) {
          message = 'Unauthorized. Please login again.';
          this.authService.logout(); // Clear local/session storage
          this.router.navigate(['/login']);
        }else if (error.status === 403) {
          message = 'Forbidden. You don’t have access to this resource.';
        } else if (error.status === 500) {
          message = 'Internal Server Error';
        }
        console.error(`[ErrorInterceptor]`, error);
        return throwError(()=> new Error(message))
      })
    );
  }
}
