class salesemployee extends employee{

    constructor(id, name, basicsalary, hra, tax, commision) {
        super(id, name, basicsalary, hra, tax)
        this.commision = commision;
    }

    computepay() {
        return super.computepay + this.commision;
    }

    dowork() {
        console.log("salesemployee is working ");
    }
}

Module.exports = salesemployee;