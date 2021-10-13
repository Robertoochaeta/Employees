const {Router} = require('express');
const router = Router();
const employeeCtrl=require('../controllers/employee-controller.js')
// Crud

router.get('/',employeeCtrl.getEmployees);
router.post('/', employeeCtrl.CreateEmployees);
router.get('/:id', employeeCtrl.getEmployee);
router.put('/:id', employeeCtrl.UpdateEmployees);
router.delete('/:id',employeeCtrl.DeleteEmployees);
module.exports=router;