// const a = ["reading", "cooking"];
// a.push("coding");
// console.log(a);
// a.pop();
// console.log(a);
// a.shift();
// console.log(a);
// a.unshift("writting");
// console.log(a);
// a.push("sleeping", "drawing");
// console.log(a);
// a.splice(1, 0, "playing", "napping");
// console.log(a);
// a.splice(2, 1);
// console.log(a);

// const list = [1, 3, 67, 4, 67, 8];
// const newList = list.concat([13, 21]);
// console.log(list);
// console.log(newList);
// console.log(newList.indexOf(67));
// console.log(newList.lastIndexOf(67));

// const personData = [{ name: "siva" }, { name: "ram" }, { name: "krishna" }];
// const data = personData.find((person) => {
//   return person.name === "krishna";
// });
// data.name = "somu";
// console.log(data);
// // console.log(personData);
// const ind = personData.findIndex((person) => {
//   return person.name === "somu";
// });
// console.log(ind);

// const prices = [345, 4920, 1234, 903];
// const discount = 15;
// const discountedPrice = [];
// prices.forEach((price, ind) => {
//   discountedPrice.push({ index: ind, price: price - price * (15 / 100) });
// });
// console.log(discountedPrice);

// const prices = [345, 4920, 1234, 903];
// const discount = 15;
// const discountedPrice = prices.map((price, ind) => {
//   return { index: ind, price: price - price * (15 / 100) };
// });
// console.log(prices);
// console.log(discountedPrice);

// const prices = [345, 4920, 1234, 903];
// console.log(`Before sorting : ${prices}`);
// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a == b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(`After Sorting : ${sortedPrices}`);
// console.log(`Reverse : ${sortedPrices.reverse()}`);

// const arr = [1, 4, 8, 21, 53, 3, 6, 2];
// const filteredArray = arr.filter((ele) => {
//   return ele > 10;
// });
// console.log(arr);
// console.log(filteredArray);

// const arr = [1, 4, 8, 21, 53, 3, 6, 2];
// const sum = arr.reduce((preVal, currVal) => preVal + currVal, 0);
// console.log(arr);
// console.log(sum);

// const str = "hello,hi,welcome";
// const strArray = str.split(",");
// console.log(strArray);

// const arr = ["how", "are", "you", "?"];
// const str = arr.join(" ");
// console.log(str);

// Spread operator:
// const arr = [1, 2, 34, 56, 7];
// const newArr = [...arr];
// arr.push(100);
// newArr.push(0);
// console.log(arr, newArr);

// Array Deconstruction:
// const fullName = ["siva", "rama", "krishnan"];
// const [firstName, middleName, lastName] = fullName;
// console.log(firstName, middleName, lastName);
