import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, tap, throwError } from 'rxjs';
import { LoaderService } from '../core/services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderservice: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderservice.show()
    return next.handle(request).pipe(
      tap((event)=>{
        if(event instanceof HttpResponse){

        }
      }),
      catchError((error:HttpErrorResponse)=>{
        return throwError(()=>error)
      }),
      finalize(()=>{
        this.loaderservice.hide()
      })
    );
  }
}
