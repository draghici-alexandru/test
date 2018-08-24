import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  sameemail = true;
  samepassword = true;

  constructor(fb: FormBuilder) {

    this.registerForm = fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      emails: fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirm_email: ['', [Validators.required, Validators.email]],
      }),
      gender: ['', Validators.required],
      passwords: fb.group({
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern('.*[0-9].*')]],
        confirm_password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern('.*[0-9].*')]],
      })
    });
  }
  ngOnInit() {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);
  }

  emailConfirm() {
    const email = this.registerForm.get(['emails', 'email']).value;
    const confirm_email = this.registerForm.get(['emails', 'confirm_email']).value;
    if (email && confirm_email) {
      if (email === confirm_email) {
        this.sameemail = true;
      } else {
        this.sameemail = false;
      }
    } else {
      this.sameemail = true;
    }
  }

  passwordConfirm() {
    const password = this.registerForm.get(['passwords', 'password']).value;
    const confirm_password = this.registerForm.get(['passwords', 'confirm_password']).value;
    if (password && confirm_password) {
      if (password === confirm_password) {
        this.samepassword = true;
      } else {
        this.samepassword = false;
      }
    } else {
      this.samepassword = true;
    }
  }
}
