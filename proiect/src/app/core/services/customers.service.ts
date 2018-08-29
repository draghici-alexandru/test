import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private newCustomerSource = new Subject<any>();

  newCustomer$ = this.newCustomerSource.asObservable();

  newCustomerAded(customer) {
    this.newCustomerSource.next(customer);
  }
}
