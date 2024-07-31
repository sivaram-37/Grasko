// const regex = /hello/;
// console.log(regex.test("hello world"));
// console.log(regex.test("Hello world"));

const regex = /^\S+@+\S+\.+\S+$/;
console.log(regex.test("test123@some.com"));
console.log(regex.test("test.test@com"));

// const regex1 = /(h|H)ello/;
// console.log(regex1.test("hello how are you"));

// const regex2 = /(b|p)ig/;
// console.log(regex2.test("big"));
// console.log(regex2.test("pig"));
// console.log(regex2.test("tip"));
