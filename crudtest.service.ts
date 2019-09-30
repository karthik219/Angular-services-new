import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Icustomers} from './customers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudtestService {
url="http://localhost:3000/customers"
  constructor(private http:HttpClient) { }

  getCustomers(){
    return this.http.get(this.url)
  }

  getCustomersId(userid:number):Observable<Icustomers>{
    return this.http.get<Icustomers>(`${this.url}/${userid}`);
  }
   
  updateCustomers(customersnew:Icustomers):Observable<Icustomers>{
     return this.http.post<Icustomers>(this.url,customersnew)
  }

  deleteCustomers(userid:number):Observable<Icustomers>{
    return this.http.delete<Icustomers>(`${this.url}/${userid}`);
  }
}
