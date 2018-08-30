import { Component, OnInit, OnChanges } from '@angular/core';
import { CustomersService } from 'app/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customers-dashboard',
  templateUrl: './customers-dashboard.component.html',
  styleUrls: ['./customers-dashboard.component.css'],
  providers: [CustomersService]
})
export class CustomersDashboardComponent implements OnInit, OnChanges {
  customerToAdd: any = null;
  customerDetail: any = null;

  constructor(private customersService: CustomersService, public router: Router, public location: Location) {
    customersService.newCustomer$.subscribe(
      customer => {
        this.customerToAdd = customer;
      });
      router.events.subscribe((val) => {
        if(location.path() != '/customers'){
          this.customerDetail = false;
        } else {
          this.customerDetail = true;
        }
      });
  }
  
  ngOnInit() {
  }
  
  ngOnChanges() {
  }

}
