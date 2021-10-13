import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url_Api='http://localhost:4000'
  constructor() { }
getEmployees(){
  return[]
}

}
