import { Component, OnInit } from '@angular/core';

import { CustomoerserviceService } from '../customoerservice.service';
import { CustomerDetails } from '../models/customer-details';
import { Router } from '@angular/router';






@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  
})
export class CustomerDetailsComponent implements OnInit {
  //rewardPoints = [{mobileNo: 9867543690}, {customerName:"priya"}, {puchaseAmount:10}];
   data:CustomerDetails

  constructor(
    public customerService:CustomoerserviceService,
    public router: Router
  ) 
  {this.data = new CustomerDetails()}

  ngOnInit() {
   // this.http.post("http://localhost:8088/customers/rewards").
    //toPromise().then(r=> r.json().then(r=>this.rewardPoints.reduce))
  }

  save() {
    this.customerService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['list']);
    });

  }


  
   
}
