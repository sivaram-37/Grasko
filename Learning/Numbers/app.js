function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNumberBetween(1, 3));
