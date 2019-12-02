import { Component, OnInit } from '@angular/core';






@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  
})
export class CustomerDetailsComponent implements OnInit {
  //rewardPoints = [{mobileNo: 9867543690}, {customerName:"priya"}, {puchaseAmount:10}];

  constructor() { }

  ngOnInit() {
   // this.http.post("http://localhost:8088/customers/rewards").
    //toPromise().then(r=> r.json().then(r=>this.rewardPoints.reduce))
  }


  
   
}
