import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentsUserEmail;
  private currentsUserEmailSession;

  constructor() {

  }
  setEmail() {
    this.currentsUserEmail = window.localStorage.getItem('email');
  }
  setEmailSession() {
    this.currentsUserEmailSession = window.sessionStorage.getItem('email');
  }
  getEmail() {
    return window.localStorage.getItem('email');
  }
  getEmailSession() {
    return window.sessionStorage.getItem('email');
  }
}
