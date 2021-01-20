import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageUtils } from '../utils/localstorage';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  localStorageUtils = new LocalStorageUtils();

  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status == 401) {
            this.localStorageUtils.limparDadosLocaisUsuario();
            this.router.navigate(['/conta/login'], {
              queryParams: { returnUrl: this.router.url },
            });
          }
          if (err.status == 403) {
            this.router.navigate(['/acesso-negado']);
          }
        }
        return throwError(err);
      })
    );
  }
}
