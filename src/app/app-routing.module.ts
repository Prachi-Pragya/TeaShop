import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';




const routes: Routes = [
  
 {path:'user', component: CustomerDetailsComponent},
 { path: 'login', component: LoginScreenComponent },
 {path : '', component : LoginScreenComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
