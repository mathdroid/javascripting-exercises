// const pets = "elephant";

// function isNotElephant(pets) {
//   return pets !== "elephant";
// }

// console.log(isNotElephant("cat"));
// console.log(isNotElephant("dog"));
// console.log(isNotElephant("elephant"));

// console.log(isNotElephant(300));

// function justReturn6() {
//   return 6;
// }

const arrayA = [1, 2, 3];
let arrayB = [4, 5, 6];

function printArray(arrayInput) {
  console.log(arrayInput);
  arrayB = arrayInput;
}

console.log(arrayA);
console.log(arrayB);

printArray(["hello", "world"]);

console.log(arrayA);
console.log(arrayB);
