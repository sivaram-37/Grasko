const customers = ["siva", "johnson", "kamalesh", "rahul", "santhosh", "giri"];

const activeCustomers = ["johnson", "kamalesh", "giri", "santhosh"];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);
