const sayHello = (name) => console.log("hi " + name);
const sayHello1 = (msg, name) => console.log(msg + " " + name);
const sayHello2 = () => console.log("hi hard code msg");
const sayHello3 = (name) => "hello " + name;
const sayHello4 = (name, msg = "no msg is given for") => msg + " " + name;

const checkInput = (cb, ...args) => {
  let isEmpty = false;
  for (const str of args) {
    if (!str) {
      isEmpty = true;

      break;
    }
  }
  if (!isEmpty) {
    cb();
  }
};

const showOP = (msg) => console.log("No Empty String in the arguments");
sayHello("siva");
sayHello1("hello", "siva");
sayHello2();
console.log(sayHello3("max"));
console.log(sayHello4("arun"));
console.log(sayHello3("praksh", "hi"));
checkInput(showOP, "hello", "there", ".", "!!!");
