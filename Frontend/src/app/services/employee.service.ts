import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from 'src/models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url_Api='http://localhost:4000/api/employees'
  employees :Employee[]
  constructor(private http: HttpClient){}

getEmployees(){
return  this.http.get<Employee[]>(this.url_Api);

}

}
