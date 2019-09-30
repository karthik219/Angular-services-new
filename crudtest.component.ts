import { Component, OnInit, inject } from '@angular/core';
import { CrudtestService } from '../crudtest.service';
@Component({
  selector: 'app-crudtest',
  templateUrl: './crudtest.component.html',
  styleUrls: ['./crudtest.component.css']
})
export class CrudtestComponent {
  columns=["userid","name","phone","address"]
  customers;
  constructor(private crud:CrudtestService) { }
  get(){
    this.crud.getCustomers().subscribe(res=>{
      this.customers=res;
      console.log(JSON.stringify(res));
    })
  }
  getById(customer){
    this.crud.getCustomersId(customer.userid).subscribe(res=>{
      this.customers= res;
      console.log(JSON.stringify(res));
    })
  }
  
  update(customer){
    this.crud.updateCustomers(customer).subscribe(res=>{
      this.customers= res;
      console.log(JSON.stringify(res));
  })
}

 delete(customer){
   this.crud.deleteCustomers(customer.userid).subscribe(res=>{
    this.customers= res;
    console.log(JSON.stringify(res));
})
}


}
