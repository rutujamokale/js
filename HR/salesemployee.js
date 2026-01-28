var Employee = require('./employee');
class SalesEmployee extends Employee{

    constructor(id, name, basicsalary, hra, tax, commision) {
        super(id, name, basicsalary, hra, tax)
        this.commision = commision;
    }

    computepay() {
        return super.computepay() + this.commision;
    }

    dowork() { 
        console.log("salesemployee is working ");
    }

    ConductTraning() {
        console.log("salesemployee conduct traning");

    }

    ConductHandOnSession() {
        console.log("salesemployee conduct handsonsession");
    }
}

module.exports = SalesEmployee;