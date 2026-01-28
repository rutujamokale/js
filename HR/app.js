import Employee from './employee.js';
import SalesEmployee from './salesemployee.js';
import SalesManager from './salesmanager.js';
import IAppraisable from './interfaces/IApprisable.js';
import ITrainer from './interfaces/ITrainer.js';

console.log(typeof Employee);
console.log(typeof SalesEmployee);
console.log(typeof SalesManager);


Object.assign(SalesManager.prototype, IAppraisable.prototype);
Object.assign(SalesManager.prototype, ITrainer.prototype);

const emp = new Employee(1, "Rutu Mokale", 50000, 10000, 5000);
console.log(`Employee pay: ${emp.computepay()}`);

const salesemp = new SalesEmployee(2, "Jane Smith", 60000, 12000, 6000, 5000);
console.log(`Sales employee pay: ${salesemp.computepay()}`);
salesemp.dowork();

const salesmanager = new SalesManager(3, "Alice Johnson", 70000, 14000, 7000, 8000, 10000);
console.log(`Sales Manager Pay: ${salesmanager.computepay()}`);
salesmanager.dowork();

const staff = [
    new SalesEmployee(1, "Amit", 25000, 5000, 2000, 3000),
    new SalesManager(2, "Neha", 40000, 8000, 4000, 6000, 10000)
];

for (const trainer of staff) {
    console.log(`Employee ID: ${trainer.id}, Name: ${trainer.name}, Pay: ${trainer.computepay()}`);
    trainer.conductTraining?.();
}