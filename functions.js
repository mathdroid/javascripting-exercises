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

const arrayB = [4, 5, 6];

function kaliSembilan(arrayInput) {
  let newArray = [];
  for (let i = 0; i < arrayInput.length; i++) {
    newArray.push(arrayInput[i] * 9);
  }

  return newArray;
}

console.log(kaliSembilan(arrayA));
console.log(kaliSembilan(arrayB));
