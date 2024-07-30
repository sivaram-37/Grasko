// // Pure function
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 5));

// // Impure Function
// let sum = 0;
// function addToNums(a, b) {
//   sum = a + b;
//   return sum;
// }

// function addWithRandom(n) {
//   return n + Math.random();
// }

// console.log(addToNums(2, 5));
// console.log(5);

// // Factory Function
// function createTaxCalculator(tax) {
//   function calculateTax(amount) {
//     return amount * tax;
//   }
//   return calculateTax;
// }

// const calculateIncomeTax = createTaxCalculator(0.05);
// const calculateVatTax = createTaxCalculator(0.03);
// console.log(calculateIncomeTax(300000));
// console.log(calculateIncomeTax(350000));
// console.log(calculateVatTax(300000));
// console.log(calculateVatTax(350000));

// // closures
// function outer() {
//   let age = 22;
//   function inner() {
//     console.log("Accessing inside inner function :" + age);
//   }
//   inner();
//   console.log("Accessing inside outer function :" + age);
// }
// outer();
// console.log("Accessing outside outer function :" + age);

// Recursion
function factorial(n) {
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

const mySelf = {
  name: "siva",
  friends: [
    {
      name: "johnson",
      friends: [
        {
          name: "Dheenavel",
          friends: [
            {
              name: "Naveen",
            },
          ],
        },
      ],
    },
    {
      name: "Giri",
      friends: [
        {
          name: "Dinesh",
        },
      ],
    },
  ],
};

function getFriendsName(person) {
  let names = [];
  if (!person.friends) {
    return [];
  }
  for (const friend of person.friends) {
    names.push(friend.name);
    names.push(...getFriendsName(friend));
  }
  return names;
}
console.log(getFriendsName(mySelf));
