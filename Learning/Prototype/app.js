// function constructor
const myPlace = {
  city: "bengaluru",
  greet() {
    console.log(`Namma ${this.city}`);
  },
};

// Creating a Prototype
Object.prototype.captilize = function (str) {
  return str.charAt(0).toUpperCase().concat(str.substring(1));
};

// console.log(Object.getPrototypeOf(myPlace));

const myHomeTown = {
  city: "chennai",
  greet() {
    console.log(`Vanakkam ${this.city}`);
  },
};
console.log(myHomeTown);
