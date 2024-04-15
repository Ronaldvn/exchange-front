import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((http: HttpErrorResponse) => {
      let errorMessage: string;
      if (http.error instanceof ErrorEvent) {
        errorMessage = `Error: ${http.error.message}`;
      } else {
        errorMessage = `Error code: ${http.status}, message: ${http.message}`;
      }
      console.log('HTTP ERROR', http);
      return throwError(() => errorMessage);
    })
  );
};
