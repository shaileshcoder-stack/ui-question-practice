import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { StorageService } from '../core/services/storage.service';
import { LoaderService } from '../core/services/loader.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(  private storageService: StorageService,  private loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    const token =this.storageService.getToken();

    let authreq =request;

    if(token){
      authreq =request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }
    return next.handle(authreq).pipe(
      finalize(() => this.loaderService.hide())
    );
  }
}
