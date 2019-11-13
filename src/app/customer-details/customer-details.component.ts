import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../data-access.service';
import { Router } from '@angular/router';
import { Customers } from '../customers';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  providers: [DataAccessService]
})
export class CustomerDetailsComponent implements OnInit {
  private customer: Customers[];
  constructor(private router : Route, private dataAccessService: DataAccessService) { }

  ngOnInit() {
  }


  createCustomers() {
    let mobileNo = (<HTMLInputElement>document.getElementById('mobileNo')).value;
    let customerName = (<HTMLInputElement>document.getElementById('customerName')).value;
    let rewardPoints = (<HTMLInputElement>document.getElementById('rewardPoints')).value;
    let customer = new Customers( Number(mobileNo), customerName, Number(rewardPoints));
    this.dataAccessService.createCustomers(customer).then(
    customer=> {
    this.customer = customer;
    },
    err => {
    console.log(err);
    }
    );
    }
   
}
