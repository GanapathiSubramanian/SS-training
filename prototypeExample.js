function Employee() {
    this.name = 'Arun';
    this.role = 'QA';
}

var empObj1 = new Employee();
empObj1.salary = 30000;
console.log(empObj1.salary); // 15

var empObj2 = new Employee();
console.log(empObj2.salary); // undefined

Employee.prototype.salary = 3000;
console.log(empObj2.salary);

Employee.prototype.age = () => {
    console.log(24)
}

var emp = new Employee()
emp.age()