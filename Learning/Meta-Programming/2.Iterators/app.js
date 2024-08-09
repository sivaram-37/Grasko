const company = {
  curEmpInd: 0,
  employees: ["siva", "giri", "john"],
  next() {
    if (this.curEmpInd >= this.employees.length) {
      return { value: this.curEmpInd, done: true };
    }
    const retVal = { value: this.employees[this.curEmpInd], done: false };
    this.curEmpInd++;
    return retVal;
  },
};

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

let employee = company.next();
while (!employee.done) {
  console.log(employee.value);
  employee = company.next();
}
