import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserEmail: any;
  private currentUserEmailSession: any;

  constructor() {

  }
  setEmail() {
    this.currentUserEmail = window.localStorage.getItem('email');
  }
  setEmailSession() {
    this.currentUserEmailSession = window.sessionStorage.getItem('email');
  }
  getEmail() {
    return this.currentUserEmail;
  }
  getEmailSession() {
    return this.currentUserEmailSession;
  }
}
