const a = 1;
const b = 2;
const c = 3;

let level = 0;

(function firstFunction() {
  const b = 5;
  const c = 6;
  // 1, 5, 6
  level += 1;
  console.log(`1. a: ${a}, b: ${b}, c: ${c}`);
  (function secondFunction() {
    const b = 8;
    // 1, 8, 6

    level += 1;
    console.log(`2. a: ${a}, b: ${b}, c: ${c}`);
    (function thirdFunction() {
      const a = 7;
      const c = 9;
      // 7, 8, 9

      level += 1;
      console.log(`3. a: ${a}, b: ${b}, c: ${c}`);
      (function fourthFunction() {
        const a = 1;
        const c = 8;
        // 1, 8, 9

        level += 1;
        console.log(`4. a: ${a}, b: ${b}, c: ${c}`);
      })();
    })();
  })();
})();

//IIFE jarang banget dipakai

(function main() {
  console.log("main");
})();
