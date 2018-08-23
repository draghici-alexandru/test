import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { EmailConfirmingDirective } from 'app/shared';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(fb: FormBuilder) {

    this.registerForm = fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      emails: fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirm_email: ['', [Validators.required, Validators.email]],
      }, {validator: emailConfirming}),
      gender: ['', Validators.required],
      passwords: fb.group({
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
        confirm_password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      }, {validator: passwordConfirming})
    });
  }
  ngOnInit() {}
  submitForm(value: any) {
    console.log(value);
  }
}
