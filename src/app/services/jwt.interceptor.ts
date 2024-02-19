// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthenticationService } from './authentication.service';


// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {

//   constructor(private authService: AuthenticationService) {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

//     const accessToken = this.authService.getAccessToken();

//     if (accessToken) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${accessToken}`
//         }
//       });
//     }

//     return next.handle(request);
//   }
// }
