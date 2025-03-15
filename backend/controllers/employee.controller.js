const Employee = require("../models/employee.model.js");
const generalHelper = require("../helpers/GeneralHelper.js");
const uuid4 = require("uuid4");
require('dotenv').config()


// Retrieve Employee.
exports.getAll = (request, response) => {
    Employee.getAll((err, data) => {
        if (err)
        response.status(500).send({
            message:
            err.message || "Some error occurred while retrieving employee."
        });
        else response.send(data);
    });
};
// Get Employees By ID
exports.getEmpBYId = (request, response) => {
    const employee_id = generalHelper.mysql_real_escape_string(request.params.id);

    Employee.getEmpById(employee_id,(err, data) => {
        if (err){
         if(err.code === 'SUSPENDED')
            response.status(402).send({
            error: err
            })  
        }else{
            response.status(200).send(data);
        } 
    });
};
exports.create = (request, response) => {
    if (!request.body || generalHelper.isEmptyObject(request.body)) {
        response.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const id = uuid4();
    const name   = generalHelper.mysql_real_escape_string(request.body.name);
    const position = generalHelper.mysql_real_escape_string(request.body.position);
    const department = generalHelper.mysql_real_escape_string(request.body.department);
    const email  = generalHelper.mysql_real_escape_string(request.body.email);
    const phone = generalHelper.mysql_real_escape_string(request.body.phone);

    Employee.create(id,name,email,position,department,phone, (err, data) => {
        if (err){
            if(err.code === 'SUSPENDED')
               response.status(402).send({error: err});  
        }else{
            response.status(200).send(data);
        }     
    });
};
// Update Employee
exports.update = (request, response) => {
    const id = generalHelper.mysql_real_escape_string(request.body.ID);
    const name = generalHelper.mysql_real_escape_string(request.body.name);
    const position = generalHelper.mysql_real_escape_string(request.body.position);
    const department = generalHelper.mysql_real_escape_string(request.body.department);
    const email = generalHelper.mysql_real_escape_string(request.body.email);
    const phone = generalHelper.mysql_real_escape_string(request.body.phone);
    
    Employee.update(id,name,email,phone,position,department,(err, data) => {
        if (err.code === 'SUSPENDED'){ 
            response.status(402).send({error: err}) 
        }else{
            response.status(200).send(data);
        }
    });
};
// Delete Employee 
exports.delete = (request, response) => {
    const employee_id = generalHelper.mysql_real_escape_string(request.params.id);
    Employee.delete(employee_id,(err, data) => {
        if (err)
        response.status(500).send({
            message:
            err.message || "Some error occurred while delete employee."
        });
        else response.send(data);
    });
};
