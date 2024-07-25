class Course {
  #price;
  get price() {
    return "Rs." + this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw "Invalid Price";
    }
    this.#price = value;
  }

  constructor(courseTitle, courseLength, coursePrice) {
    this.title = courseTitle;
    this.length = courseLength;
    this.price = coursePrice;
  }
  calculate() {
    console.log(this.#price / this.length);
  }
  summary() {
    console.log(`Title:${this.title},Length:${this.length},Price:${this.price}`);
  }
}

const js = new Course("Javascript", 52, 4000);
console.log(js);
js.calculate();
js.summary();

class PracticalCourse extends Course {
  constructor(courseTitle, courseLength, coursePrice, exerciseCount) {
    super(courseTitle, courseLength, coursePrice);
    this.numOfExercise = exerciseCount;
  }
}
const ang = new PracticalCourse("Angular", 36, 3000, 10);
console.log(ang);
ang.calculate();
ang.summary();

class TheoreticalCourse extends Course {
  publish() {
    console.log("Publishing...");
  }
}
const tc = new TheoreticalCourse("abc", 100, 5000);
// const tc = new TheoreticalCourse("abc", 100, -5000);  // error will will be thrown
console.log(tc);
tc.summary();
tc.calculate();
