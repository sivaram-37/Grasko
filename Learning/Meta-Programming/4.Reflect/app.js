const course = {
  title: "Javascript",
  length: "52 hours",
};

console.log(course);

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

// To add a new property to an object
Reflect.defineProperty(course, "price", { value: 2000 });

// To delete a property from an object
Reflect.deleteProperty(course, "length");

console.log(course);
