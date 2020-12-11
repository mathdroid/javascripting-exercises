let arr = new Array(); //[]

let pizzaToppings = ["tomato sauce", "cheese", "pepperoni"];

pizzaToppings[2] = "pineapple";

pizzaToppings[3] = "mushroom";

pizzaToppings.unshift("beef");

console.log(pizzaToppings);

console.log(
  pizzaToppings.map(function (topping) {
    return `I love ${topping}`;
  })
);

console.log(
  pizzaToppings.filter(function (topping) {
    return topping.length > 5;
  })
);

const toppingCount = pizzaToppings.reduce(function (
  previousValue,
  currentElement
) {
  console.log(previousValue, currentElement, currentElement.length);
  return previousValue + currentElement.length;
},
100);

console.log(toppingCount);
