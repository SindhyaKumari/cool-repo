// const prompt = require("prompt-sync")({ sigint: true });

// const integersString = prompt("Input any number of integers separated space: ");

// const numbers = /^[0-9\s]+$/;

// if (integersString != null && integersString.match(numbers)) {
//   console.log("integersString :>> ", integersString);
//   getLis(integersString);
// } else {
//   console.log("enter the string in correct format");
// }

// function getLis(input) {
//   if (input.length === 0) {
//     return [];
//   }

//   const numArray = input.split(" ");
//   console.log(numArray);

//   const lisLenPerIndex = [];
//   let max = { index: 0, length: 1 };

//   for (var i = 0; i < numArray.length; i++) {
//     lisLenPerIndex[i] = 1;
//     for (let j = i - 1; j >= 0; j--) {
//       if (numArray[i] > numArray[j] && lisLenPerIndex[j] >= lisLenPerIndex[i]) {
//         const length = (lisLenPerIndex[i] = lisLenPerIndex[j] + 1);
//         if (length > max.length) {
//           max = { index: i, length };
//         }
//       }
//     }
//   }

//   const lis = [numArray[max.index]];
//   for (var i = max.index; i >= 0 && max.length !== 0; i--) {
//     if (
//       numArray[max.index] > numArray[i] &&
//       lisLenPerIndex[i] === max.length - 1
//     ) {
//       lis.unshift(numArray[i]);
//       max.length--;
//     }
//   }
//   console.log(lis);
//   return lis;
// }
