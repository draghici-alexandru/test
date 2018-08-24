import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn = window.localStorage.getItem('email');
  loggedInSession = window.sessionStorage.getItem('email');
  loginForm: FormGroup;

  constructor(fb: FormBuilder) {

    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: ['']
    });

  }
  ngOnInit() {
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
