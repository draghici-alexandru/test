import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'app/core';

@Component({
  selector: 'app-customers-dashboard',
  templateUrl: './customers-dashboard.component.html',
  styleUrls: ['./customers-dashboard.component.css'],
  providers: [CustomersService]
})
export class CustomersDashboardComponent implements OnInit {
  customerToAdd: any = null;

  constructor(private customersService: CustomersService) {
    customersService.newCustomer$.subscribe(
      customer => {
        this.customerToAdd = customer;
      });
  }
  
  ngOnInit() {
  }

}
