const {Router} = require('express');
const router = Router();
const employeeCtrl=require('../controllers/employee-controller.js')
// Crud

router.get('/',employeeCtrl.getEmployees);
router.post('/', employeeCtrl.CreateEmployees);
router.get('/', employeeCtrl.getEmployee);
router.put('/', employeeCtrl.UpdateEmployees);
router.delete('/',employeeCtrl.DeleteEmployees);
module.exports=router;