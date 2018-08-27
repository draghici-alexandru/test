import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: UserService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    if (state.url === '/login' || state.url === '/register') {
      if (this.auth.getCurrentUser()) {
        this.router.navigate(['']);
        return false;
      }
      return true;
    } else {
      if (!this.auth.getCurrentUser()) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }
  }
}
