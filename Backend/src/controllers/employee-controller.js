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
    employeeCtrl.getEmployee=async(req,res)=>{
        console.log(req.params);
      const employee= await  Employee.findById(req.params.id);
        res.send(employee);
    }
    employeeCtrl.UpdateEmployees=async(req,res)=>{
      await  Employee.findByIdUpdate(req.params.id, req.body);
      res.json({message: 'Employee Updated'});
    }
    employeeCtrl.DeleteEmployees=async(req,res)=>{
     await Employee.findByIdAndDelete(req.params.id);
     res.json({status:'Employee Deleted'});
    }


module.exports= employeeCtrl;
