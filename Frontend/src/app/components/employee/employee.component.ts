import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service'; 


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
placeholder= 'Enter Your  FullName';
position='Enter Your Position';
office='Enter Your Office';
salary='Enter Your Salary';
  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
  this.getEmployees();
  }
getEmployees(){
  this.employeeService.getEmployees().subscribe(
    res => {
      this.employeeService.employees =res;
    },
    err => console.log(err)
  )
}
addEmployee(form:NgForm){
this.employeeService.createEmployee(form.value).subscribe(
res=> {
this.getEmployees(),
form.reset();
},
err=> console.log(err)
);
}
deleteEmployees(){
  alert("Deleting");
}
}
