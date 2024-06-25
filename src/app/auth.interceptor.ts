import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const token = `${environment.apiToken}`;

  if (!token) {
    return next(req);
  }

  const headers = new HttpHeaders({
    Authorization: token,
  });

  const newReq = req.clone({
    headers,
  });

  return next(newReq);
}
