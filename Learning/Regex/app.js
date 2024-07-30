const regex = /^\S+@+\S+\.+\S+$/;
console.log(regex.test("test123@some.com"));

const regex2 = /(h|H)ello/;
console.log(regex2.test("hello how are you"));

const regex3 = /h.l/;
console.log(regex3.test("hell"));
