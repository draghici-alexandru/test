import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUserEmail;

  constructor() {

  }
  setEmail() {
    this.currentUserEmail = window.localStorage.getItem('email');
  }
  setEmailSession() {
    this.currentUserEmail = window.sessionStorage.getItem('email');
  }
  getEmail() {
    return window.localStorage.getItem('email');
  }
  getEmailSession() {
    return window.sessionStorage.getItem('email');
  }
}
