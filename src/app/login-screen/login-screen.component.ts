import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;
  ngOnInit() {
  }
 login(): void{
  if(this.username == 'admin' && this.password == 'admin'){
    this.router.navigate(["user"]);
   }
   else {
     alert("Invalid credentials");
   }
 }
 }

