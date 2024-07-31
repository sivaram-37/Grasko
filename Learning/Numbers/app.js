// using Number()
let b = "10";
console.log(Number(b), typeof b);

// using + operator
let c = "3.14";
console.log(+c, typeof +c);

// Multiply by 1
let a = "3.14" * 1;
console.log(a, typeof a);

// Using parseInt
let d = parseInt(c);
console.log(d, typeof d);

// using parseFloat
let f = parseFloat("3.14");
console.log(f, typeof f);

// Generate random number between a and b
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNumberBetween(1, 3));
