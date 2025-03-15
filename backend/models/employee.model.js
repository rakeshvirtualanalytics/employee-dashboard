/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable eqeqeq */
const conn = require("./db.js");
const passwordHasher = require("../config/hasher.config.js");
const moment = require("moment");

const Employee = function(employee) {
    this.name = employee.name;
    this.position = employee.position;
    this.email = employee.email;
    this.department = employee.department;
    this.phone = employee.phone;
}
// Create Gst Query
Employee.create = (id,name,email,position,department,phone, result) => {
    conn.query(`INSERT INTO employee(ID, Name, Position, Department, Email, Phone) VALUES('${id}','${name}','${position}','${department}','${email}','${phone}')`, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }else{
            result(null, res);
        }
    }); 
}
// Get Employee By ID Query
Employee.getEmpById = (employee_id,result)=> {
    conn.query(`SELECT ID, Name, Position, Department, Email, Phone FROM employee WHERE ID = '${employee_id}'`, (err,res) => {
        if (err) {
            result(null, err);
            return;
          }else{
            result(null, res);
        }
    })
}
// Update Client Query
Employee.update = (id,name,email,phone,position,department,result) => {
    conn.query(`UPDATE employee SET name = '${name}',phone = '${phone}',email = '${email}',position = '${position}',department = '${department}' WHERE ID = '${id}'`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        // result(null, res);
        result(res, null);
    });    
};
// Retreive Employee Query
Employee.getAll = (result) => {
    conn.query(`SELECT * FROM employee`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }else{
            result(null, res);
        }
    });
};
// Delete Employee Query
Employee.delete = (employee_id,result) => {
    conn.query(`DELETE FROM employee WHERE ID = '${employee_id}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};
module.exports = Employee;