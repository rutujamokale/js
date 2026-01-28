var SalesEmployee= require ('./salesemployee')
class SalesManager extends SalesEmployee{
    constructor(id, name, basicsalary, hra, tax, commision, bonus) {
        super(id, name, basicsalary, hra, tax,commision)
        this.bonus = bonus;    
    }

    computepay() {
        return super.computepay() + this.bonus
    }

    dowork() {
        console.log("salesmanager is working");

    }

    ConductTraning() {
        console.log("salesmanager is conduct traning");

    }

    ConductHandOnSession() {
        console.log("salesmanager conducting hands on session ");
    }


}

module.exports = SalesManager;