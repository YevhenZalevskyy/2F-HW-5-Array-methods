const allNum = [7, 55, 14, 6, 37, 90, 23, 1, 'five', 3.14]
const numbers = [-2, 85, 3, -25, 1, 5, -6]

// #1 створення масиву з випадкових чисел
function getRandomArray (length, min, max) {
  let arr = [];
  for (let i = 0; i < length; i++) {
  arr[i] = Math.round(Math.random() * (max - min)) + min;
  }
  return arr;
}
console.log(`#1: ${getRandomArray(10, 0, 100)}`)

// #3(1) знаходить середнє арифметичне
const integers = allNum.filter(element => element !== NaN && element === (element ^ 0));
const arithMean = integers.reduce((total, element) => total + element, 0) / integers.length;
console.log(`#3(1): ${arithMean}`);

// #3(2) старий метод
function getArithMean (arr1) {
  let sum = 0
  let counter = 0
  let arithMean = 0
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== NaN && arr1[i] === (arr1[i] ^ 0)) {
      sum += arr1[i];
      counter++;
    }
    arithMean = sum / counter;
  }
  return arithMean;
}
console.log(`#3(2): ${getArithMean(allNum)}`);

// #4 рахує медіану (використано змінні з #3(1))
const difference = integers.map(element => Math.abs(element - arithMean))
const indexOfMinDiff = difference.indexOf((Math.min(...difference)));
console.log(`#4: ${integers[indexOfMinDiff]}`);

// #5 фільтрує парні числа
const filterEvenNumbers = integers.filter(element => element %2 !== 0)
console.log(`#5: ${filterEvenNumbers}`);

// #6 кількість чисел більших за 0
const countPositiveNumbers = numbers.filter(element => element > 0)
console.log(`#6: ${countPositiveNumbers.length}`);

// #7 числа, які діляться на ціло на 5
const getDividedNumbers = numbers.filter(element => element %5 === 0)
console.log(`#7: ${getDividedNumbers}`);
