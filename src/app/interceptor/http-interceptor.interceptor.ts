import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const url = 'http://localhost:8080/'
        const url = 'https://apibemprotege.herokuapp.com/'
        req = req.clone({
            url: url + req.url
        })
    return next.handle(req)
  }
}
