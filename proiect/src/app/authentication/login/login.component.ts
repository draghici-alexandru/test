import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loggedIn;
  public loggedInSession;
  loginForm: FormGroup;

  constructor(private _currentUserEmail: UserService, fb: FormBuilder) {

    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: ['']
    });

  }
  ngOnInit() {
    this.loggedIn = this._currentUserEmail.getEmail();
    this.loggedInSession = this._currentUserEmail.getEmailSession();
  }

  onSubmit() {
    if (this.loginForm.value.remember) {
      this._currentUserEmail.setEmail();
      this.loggedIn = this._currentUserEmail.getEmail();
    } else {
      this._currentUserEmail.setEmailSession();
      this.loggedInSession = this._currentUserEmail.getEmailSession();
    }
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
  }
  logOut() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.loggedIn = window.localStorage.getItem('email');
    this.loggedInSession = window.sessionStorage.getItem('email');
  }

}
