import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from 'app/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addCustomerForm: FormGroup;
  numberId: any = 1;

  constructor(private _customerAdded: CustomersService, private fb: FormBuilder) { }

  initForm() {
    this.addCustomerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const customer = {
      id : this.numberId,
      firstName: this.addCustomerForm.value.firstName,
      lastName: this.addCustomerForm.value.lastName,
      email: this.addCustomerForm.value.email
    };
    this.numberId = this.numberId + 1;
    this._customerAdded.newCustomerAded(customer);
    this.addCustomerForm.reset();
    document.getElementById('add').click();
  }

}
