import { Injectable } from '@angular/core';
import  { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Customers } from './customers';







@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
   url='http://localhost:8080/save';
  //private url='/save'
  http: any;
  

  constructor(private httpClient: HttpClient) { 

  }





  createCustomers(customers: Customers): Promise<Array<Customers>> {
    let customerHeaders = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.url, JSON.stringify(customers), { headers: customerHeaders })
    .toPromise()
    .then(response => response.json() as Customers[])
    .catch(this.handleError);
    }

    private handleError(error: any): Promise<Array<any>> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
      }
     


  }

