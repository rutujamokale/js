class Employee{
    constructor(id, name, basicsalary, hra, tax) {
        this.id = id;
        this.name = name;
        this.basicsalary = basicsalary;
        this.hra = hra;
        this.tax = tax;
    }

    computepay() {
        return this.basicsalary + hra - this.tax;
    }

    dowork() {
        throw new error('method "dowork()" must be implemented ')
    }
}