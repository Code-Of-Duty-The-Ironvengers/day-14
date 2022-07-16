function sum(num1 = 1, num2 = 1) {
  return num1 + num2;
}

function subtract(num1 = 1, num2 = 1) {
  return num1 - num2;
}
console.log("Hello");
// const object = {
//   name: "tiffany",
//   hasGoodQuestion: true,
// };

// exports.sum = sum
// this is called a named export
// module.exports = sum -> const sum = require('./path to file')
// exports.sum  = sum -> const {sum} = require('./path to file')

const name = "palash";

// const object = {
//   name,
// };

module.exports = sum;
// above this is called a default export
// module.exports = {
//   subtract: subtract,
//   sum,
//   object: object,
//   studentsFromGermany: ["kira", "elvan", "asem", "vincent", "nico"],
// };
