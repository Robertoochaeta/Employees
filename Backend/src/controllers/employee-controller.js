const employeeCtrl={}
const Employee = require('../models/employee');

employeeCtrl.getEmployees=async (req,res)=>{
     const employees= await Employee.find()
     res.json(employees)
    }
    employeeCtrl.CreateEmployees= async(req,res)=>{
       const newEmployee= new Employee(req.body);
      await  newEmployee.save();
      res.send({message: 'Employee Created'})
    }
    employeeCtrl.getEmployee=(req,res)=>{
        res.send('Getting one employee');
    }
    employeeCtrl.UpdateEmployees=(req,res)=>{
        res.send('Update Employees');
    }
    employeeCtrl.DeleteEmployees=(req,res)=>{
        res.send('Delete Employees');
    }


module.exports= employeeCtrl;
