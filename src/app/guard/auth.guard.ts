import { Injectable } from '@angular/core';
import { Router, CanActivate, } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { take, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate()
    : Observable<boolean> {
    return this.loginService.isLoggedIn
      .pipe(take(1),
        map((isLoggedIn: boolean) => {
          if (!isLoggedIn) {
            this.router.navigate(['/login']);
            return true;
          }
          if (this.loginService.isLoggedIn) {
            return true;
          }
        })

      )
  }
}