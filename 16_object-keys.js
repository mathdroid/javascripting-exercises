const car = {
  make: "Honda",
  model: "Accord",
  year: 2020,
  driver: {
    name: "Joko",
    isBinar: true,
  },
};

const keys = Object.keys(car);

console.log(keys); // ['make', 'model', 'year']

// const values = keys.map((key) => car[key]);

// console.log(values);

// console.log(car.driver.name);
// /* access properties programmatically

// const values = keys.map(function (key) {
//   return car[key];
// });

// console.log(values); // [ 'Honda', 'Accord', 2020 ]

// */
