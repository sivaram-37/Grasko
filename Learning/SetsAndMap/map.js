const data = new Map([
  ["msg", "welcome to Grasko"],
  ["newMsg", "Learn JS"],
]);

console.log(data.get("msg"));

data.delete("newMsg");
console.log(data);

console.log(data.has("msg"));
console.log(data.has("newMsg"));

const person1 = { name: "siva" };
const person2 = { name: "emma" };

const personData = new Map([[person1, { Item: "Bag", price: 29 }]]);

console.log(personData);

console.log("for loop using entries()");
for (const entry of personData.entries()) {
  console.log(entry);
}

personData.set(person2, { Item: "Bike", price: 5000 });

console.log("for loop using entries()");
for (const [key, val] of data.entries()) {
  console.log(`${key} ---> ${val}`);
}

console.log("for loop using key()");
for (const k of personData.keys()) {
  console.log(k);
}

console.log("for loop using value()");
for (const v of personData.values()) {
  console.log(v);
}

data.clear();
console.log(data);
