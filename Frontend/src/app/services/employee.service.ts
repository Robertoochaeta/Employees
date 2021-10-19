import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from 'src/models/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url_Api='http://localhost:4000/api/employees'
  selectedEmployee:Employee={
    name:'',
    office:'',
    position:'',
    salary:0,

  };
  employees :Employee[]
  constructor(private http: HttpClient){}

getEmployees(){
return  this.http.get<Employee[]>(this.url_Api);

}
createEmployee(employee:Employee){
return this.http.post(this.url_Api,employee);
}
PutEmployee(employee:Employee){
  return this.http.put(` ${this.url_Api}/${employee._id} `,employee)
}
deleteEmployee(_id:string){
  return this.http.delete(` ${this.url_Api}/${_id} `)
}

}
