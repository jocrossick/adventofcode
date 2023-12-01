const { readFile } = require("../useful/read");

const day1_part1 = (filename) => {

  const entries = readFile(filename);
  const solution = entries.reduce((acc, entry) => {
    if (entry.length <= 0) {
      return acc;
    }

    const numbers = entry.match(/[0-9]/g);
    if (numbers.length <= 0) {
      console.log('Did not find any numbers in string ', entry);
      return acc;
    }
    return acc + parseInt(numbers[0] + numbers[numbers.length-1]);
  }, 0)

  return solution;
};

const day1 = () => {
  const solution = day1_part1("day1-part1")
  console.log("Solution is ", solution);
}


module.exports = { day1 }
