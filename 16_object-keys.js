const car = {
  make: "Honda",
  model: "Accord",
  year: 2020,
};
const keys = Object.keys(car);

console.log(keys); // ['make', 'model', 'year']

/* access properties programmatically

const values = keys.map(function (key) {
  return car[key];
});

console.log(values); // [ 'Honda', 'Accord', 2020 ]

*/
