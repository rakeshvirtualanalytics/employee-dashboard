module.exports = app => {
    const employee = require("../controllers/employee.controller.js");

 
    app.get("/employees/get-all", employee.getAll);
    app.get("/employees/:id", employee.getEmpBYId);
    app.post("/employees/create", employee.create);
    app.put("/employees/update", employee.update);
    app.delete("/employees/:id", employee.delete);
    
}