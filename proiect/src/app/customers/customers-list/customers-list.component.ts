import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit, OnChanges {
  @Input() customer: any;

  myCustomers: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.customer) {
      this.myCustomers.push(this.customer);
    }
  }

}
