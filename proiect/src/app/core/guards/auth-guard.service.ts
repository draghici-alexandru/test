import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: UserService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.getCurrentUser()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
