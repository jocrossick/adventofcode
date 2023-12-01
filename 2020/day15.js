const input = [16, 11, 15, 0, 1, 7];
const test = [0, 3, 6];
const test1 = [1, 3, 2]; //the 2020th number spoken is 1.
const test2 = [2, 1, 3]; //the 2020th number spoken is 10.
const test3 = [1, 2, 3]; //the 2020th number spoken is 27.
const test4 = [2, 3, 1]; //the 2020th number spoken is 78.
const test5 = [3, 2, 1]; //the 2020th number spoken is 438.
const test6 = [3, 1, 2]; //the 2020th number spoken is 1836.

const memoryGame = (input, limit) => {
    console.log("Starting run", Date.now());
  const lastSpoken = {};
  input.forEach((element, index) => {
    if (index != input.length - 1) {
      lastSpoken[element] = index;
    }
  });

  let lastNumber = input[input.length - 1];
  console.log("last number is", lastNumber, lastSpoken);
  
  for (let i = input.length - 1; i < limit -1; i++) {
    const newNumber = lastSpoken.hasOwnProperty(lastNumber)
      ? i - lastSpoken[lastNumber]
      : 0;

    lastSpoken[lastNumber] = i;
    lastNumber = newNumber;
  }
  console.log("Ending run", Date.now());
  return lastNumber;
};

console.log("Day 15 part 1", memoryGame(input, 2020)); //662
console.log("Day 15 part 2", memoryGame(input, 30000000)); //37312
