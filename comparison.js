let json = {
  name: "odi",
  age: null,
};

if (json.age !== null && json.age < 17) {
  console.log("child");
} else {
  console.log("adult");
}
