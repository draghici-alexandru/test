import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser = null;

  setCurrentUser(currentUser) {
    this.currentUser = currentUser;
  }
  getCurrentUser() {
    return this.currentUser;
  }
  logOut() {
    this.currentUser = null;
    window.sessionStorage.removeItem('email');
    window.localStorage.removeItem('email');
  }
}
