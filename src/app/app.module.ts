import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component'
import{ MatButtonModule} from'@angular/material/button';
import { MatCardModule} from '@angular/material';
import { MatInputModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import {FormsModule} from '@angular/forms';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  { HttpClientModule  } from '@angular/common/http';
import { ShowDataComponent } from './show-data/show-data.component';
// { HttpHeaders} from 'angular/HttpHeaders'






@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    CustomerDetailsComponent,
    ShowDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,MatToolbarModule,
    MatIconModule,BrowserAnimationsModule,   HttpClientModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
