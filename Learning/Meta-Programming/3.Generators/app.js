// // If we use the generators, we don't need next() in our object
// const company = {
//   // curEmpInd: 0,
//   employees: ["siva", "vinoth", "suresh", "chethan", "abi", "aakash"],
//   // next() {
//   //   if (this.curEmpInd >= this.employees.length) {
//   //     return { value: this.curEmpInd, done: true };
//   //   }
//   //   const retVal = { value: this.employees[this.curEmpInd], done: false };
//   //   this.curEmpInd++;
//   //   return retVal;
//   // },
//   getNext: function* iterateEmployees() {
//     let curEmpInd = 0;
//     while (curEmpInd <= this.employees.length) {
//       yield this.employees[curEmpInd];
//       curEmpInd++;
//     }
//   },
// };

// // If we use for of loop, we will get error but we can able to use for of loop if we use Symbol
// for (const emp of company) {
//   console.log(emp);
// }

// // You can't loop through like this
// console.log(company.getNext().next());
// console.log(company.getNext().next());
// console.log(company.getNext().next());
// console.log(company.getNext().next());

// // We have to loop like this
// let iter = company.getNext();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// Or We can do this by using symbols
const company = {
  employees: ["siva", "vinoth", "suresh", "chethan", "abi", "aakash"],
  [Symbol.iterator]: function* employeeGenerator() {
    // A function keyword followed by * will make it as a generator function
    let curEmpInd = 0;
    while (curEmpInd < this.employees.length) {
      yield this.employees[curEmpInd]; // yield is some what similar to return, it pass the execution after return the value and wait for next() to continue the rest of the code
      curEmpInd++;
    }
  },
};

// we can now able to use for of loop
for (const emp of company) {
  console.log(emp);
}

// We can also use spread operator
console.log([...company]);
