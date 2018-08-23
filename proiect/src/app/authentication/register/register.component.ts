import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      }),
      gender: ['', Validators.required],
      passwords: fb.group({
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
        confirm_password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      })
    });
  }
  ngOnInit() {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);
  }

  emailConfirm() {

  }
}
