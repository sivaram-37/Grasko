const emp = {
  curEmpInd: 0,
  employees: ["siva", "vinoth", "suresh", "chethan", "abi", "aakash"],
  next() {
    if (this.curEmpInd < this.employees.length) {
      return { value: this.curEmpInd, done: true };
    }
    const retVal = { value: this.employees[this.curEmpInd], done: false };
    this.curEmpInd++;
    return retVal;
  },
};

// console.log(emp.next());
// console.log(emp.next());
// console.log(emp.next());
// console.log(emp.next());
// console.log(emp.next());
// console.log(emp.next());
// console.log(emp.next());

let employee = emp.next();
while (!employee.done) {
  console.log(employee.value);
  employee = emp.next();
}
