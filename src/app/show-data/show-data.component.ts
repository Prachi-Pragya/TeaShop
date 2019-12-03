import { Component, OnInit } from '@angular/core';
import { CustomoerserviceService } from '../customoerservice.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  customersData: any;

  constructor(public customerService:CustomoerserviceService)
   { this.customersData = [];}

  ngOnInit() {
    this.getAllStudents();
  }
   
  getAllStudents() {
    //Get saved list of students
    this.customerService.getList().subscribe(response => {
      console.log(response);
      this.customersData = response;
    })
  }

}
