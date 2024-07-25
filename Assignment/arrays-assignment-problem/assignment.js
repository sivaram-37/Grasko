const task1 = () => {
  const filteredArray = arr.filter((i) => i > 5);
  console.log(filteredArray);

  const mappedArray = arr.map((i) => {
    return { num: i };
  });
  console.log(mappedArray);

  const mul = arr.reduce((preval, curVal) => preval * curVal, 1);
  console.log(mul);
};

const findMaxAndMin = (...arr) => {
  let maxVal = arr[0];
  let minVal = arr[0];
  for (const i of arr) {
    if (i > maxVal) {
      maxVal = i;
    }
    if (i < minVal) {
      minVal = i;
    }
  }
  return [maxVal, minVal];
};

const arr = [1, 2, 7, 11];
task1();
const [max, min] = findMaxAndMin(...arr);
console.log(max, min);

const list = new Set();
list.add(1);
list.add(2);
list.add(3);
list.add(1);
console.log(list);
