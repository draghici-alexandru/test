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

  constructor(private _userService: UserService, fb: FormBuilder) {

    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: ['']
    });

  }
  ngOnInit() {
    this.loggedIn = this._userService.getEmail();
    this.loggedInSession = this._userService.getEmailSession();
  }

  onSubmit() {
    if (this.loginForm.value.remember) {
      window.localStorage.setItem('email', this.loginForm.value.email);
      this.loggedIn = window.localStorage.getItem('email');
    } else {
      window.sessionStorage.setItem('email', this.loginForm.value.email);
      this.loggedInSession = window.sessionStorage.getItem('email');
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
