let user = {
  name: "John",
  age: 30,
};

console.log(user);

console.log(user.age);
console.log(user["name"]);

user.address = "New York";

console.log(user);
console.log("age" in user);

delete user.age;

console.log("age" in user);

for (let key in user) {
  console.log(key, user[key]);
}
