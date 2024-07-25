const rn1 = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (rn1 > 0.7) {
  alert("The randomNumber is greater than 0.7");
}
const arr = [3, 2, 5, 2, 1];
console.log("<--- for Loop --->");
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
console.log("<--- for-of Loop --->");
for (const i of arr) {
  console.log(i);
}
const rn2 = Math.random();
if ((rn1 > 0.7 && rn2 > 0.7) || rn1 < 0.2 || rn2 < 0.2) {
  console.log(
    "Either both two randomNumbers are greater than 0.7 or atleast of them is less than 0.2"
  );
}
console.log(`The Values are :- ${rn1} - ${rn2}`);
