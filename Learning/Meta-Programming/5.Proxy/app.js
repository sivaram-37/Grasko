const course = {
  title: "Javascript",
  length: "52 hours",
};

const proxyCourseHandler = {
  get(obj, prop) {
    if (prop === "length") {
      return "A long course";
    }
    return obj[prop];
  },
  set(obj, prop, newVal) {
    if (prop !== "rating") {
      return;
    }
    obj[prop] = newVal;
  },
};

const proxyCourse = new Proxy(course, proxyCourseHandler);

// To get a value
console.log(proxyCourse.title, proxyCourse.length);

// To set a value
proxyCourse.rating = 5;

console.log(proxyCourse);
