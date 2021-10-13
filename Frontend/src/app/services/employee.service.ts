import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from 'src/models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient){}
url_Api='http://localhost:4000/api/employees'
employees :Employee[]

getEmployees(){
return  this.http.get(this.url_Api);

}

}
