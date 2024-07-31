// log this in globally
console.log(this); //window

// log this in a non-arrow function
function sample() {
  console.log(this); //window
  const name = "siva";
  console.log(name); // siva
}
sample();

// log this in an arrow function
const arrow = () => {
  console.log(this); // window
  const name = "siva";
  console.log(name); //siva
};
arrow();

// log this in method
const person = {
  name: "siva",
  greet: function () {
    console.log(this); //person object
    // console.log(name)  //error
    console.log(this.name); //siva
  },
};
person.greet();

// log this in method(arrow function)
const user = {
  userName: "siva",
  msg: () => {
    console.log(this); // window
    console.log(this.userName); // undefined
    console.log(user.userName); // siva
    // console.log(userName); // error
  },
};
user.msg();
