import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _currentUser: UserService, private fb: FormBuilder, private router: Router) {
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: ['']
    });
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    if (this.loginForm.value.remember) {
      window.localStorage.setItem('email', this.loginForm.value.email);
    } else {
      window.sessionStorage.setItem('email', this.loginForm.value.email);
    }
    this._currentUser.setCurrentUser(this.loginForm.value.email);
    this.router.navigate(['']);
  }

}
