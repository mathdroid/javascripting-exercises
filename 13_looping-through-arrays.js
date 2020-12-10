const pets = ["cat", "dog", "rat"];

for (let i = 0; i < pets.length; i++) {
  pets[i] = pets[i] + "s";
}

console.log(pets);

// console.log(
//   pets.map(function (element) {
//     return element + "s";
//   })
// );
