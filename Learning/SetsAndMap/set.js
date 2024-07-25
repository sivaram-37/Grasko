const arr = [1, 2, 5, 7, 2, 1];

const newArray = new Set(arr);

for (const el of newArray.values()) {
  console.log(el);
}

for (const entry of newArray.entries()) {
  console.log(entry);
}

newArray.add(50);
console.log(newArray);

newArray.delete(2);
console.log(newArray);

console.log(newArray.size);

console.log(newArray.has(1));
console.log(newArray.has(4));

newArray.clear();
console.log(newArray);
