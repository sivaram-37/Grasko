// To create a Symbol
const uid = Symbol(); // or const uid = Symbol('uid'); both are same

// To use a symbol
const user = {
  [uid]: "p1",
  name: "siva",
  age: 22,
};

user[uid] = "p2";
console.log(user);
