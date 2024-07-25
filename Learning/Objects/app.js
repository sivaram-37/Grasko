// const obj = { name: "siva", age: 32, msg: () => "Welcome!" };
// console.log(obj);

// //Adding
// obj.isAdmin = true;
// console.log(obj);

// // Modifing
// obj.age = 22;
// console.log(obj);

// // Deleting
// delete obj.msg;
// console.log(obj);

// // Special Key names &square bracket property
// const personData = {
//   "first name": "siva",
//   age: 22,
//   hobbies: ["cricket", "music"],
// };
// console.log(personData.age);
// console.log(personData["first name"]);
// const movieList = document.getElementById("movie-list");
// movieList.style.display = "block";
// // movieList.style.backgroundColor = "blue";
// movieList.style["background-color"] = "grey";

// // Spread Operator
// const person = { age: 22, hobbies: ["cooking", "reading"] };
// const person1 = person;
// // Spread operator can't deep clone an object
// const person2 = { ...person };
// const person3 = { ...person, hobies: [...person.hobbies] };
// person.age = 20;
// person.hobbies.push("drawing");
// console.log(person);
// console.log(person1);
// console.log(person2);
// console.log(person3);

// // Object Destructuring
// const movies = {
//   id: Math.random().toString(),
//   info: {
//     title: "Movie Name",
//     rating: "4/5",
//   },
// };

// // to access the title in movie.info
// console.log(movies.info.title);
// // destructure the info.title into title
// const { title } = movies.info;
// console.log(title);
// // To change the deconstruct name
// const { rating: stars } = movies.info;
// console.log(stars);

// //this keyword
// const info = {
//   firstName: "Ben",
//   lastName: "10",
//   greet: function () {
//     console.log(this.firstName, this.lastName);
//   },
// };
// info.greet();

// // Not work in arrow function
// const info = {
//   firstName: "Ben",
//   lastName: "10",
//   greet: () => {
//     console.log(this.firstName, this.lastName);
//   },
// };
// info.greet();

// // this using arrow function
// const team = {
//   teamName: "Super Kings",
//   players: ["Dhoni", "Raina", "Jadeja", "Bravo", "Hayden", "Aswin"],
//   fun() {
//     this.players.forEach((p) => {
//       console.log(p + " - " + this.teamName);
//     });
//   },
// };
// team.fun();

// Getters & Setters
const personData = {
  set firstName(val) {
    this._firstName = val;
  },
  get firstName() {
    return this._firstName;
  },
  age: 22,
  greet() {
    console.log(this.age);
  },
};

personData.firstName = "rahul";
console.log(personData.firstName);
const { greet } = personData;
greet.call(personData);
