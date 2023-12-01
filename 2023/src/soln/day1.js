const { readFile } = require("../useful/read");

//Your puzzle answer was 54388.
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

const day1_part2 = (filename) => {

  const entries = readFile(filename);
  const numbersToAdd = entries.map(entry => {
    if (entry.length <= 0) {
      return 0;
    }

    const numbers = entry.match(/[0-9]|one|two|three|four|five|six|seven|eight|nine/g);

    if (numbers.length <= 0) {
      console.log('Did not find any numbers in string ', entry);
      return 0;
    }

    const firstNumber = getNumber(numbers[0]);
    const secondNumber = getNumber(numbers[numbers.length-1]);

    console.log("Input string is ", entry);
    const targetNumber = firstNumber.concat(secondNumber);
    console.log("Target number is ", targetNumber);
    return parseInt(targetNumber);
  });
  console.log("All the numbers", numbersToAdd);
  const solution = numbersToAdd.reduce((acc, number) => acc + number, 0);

  return solution;
};

const getNumber = aNumberString => {
  switch (aNumberString) {
    case 'one':
      return '1';
    case 'two':
      return '2';
    case 'three':
      return '3';
    case 'four':
      return '4';
    case 'five':
      return '5';
    case 'six':
      return '6';
    case 'seven':
      return '7';
    case 'eight':
      return '8';
    case 'nine':
      return '9';
    default:
      return aNumberString;
  }
}

const day1 = () => {
  const solution = day1_part2("day1-part1")
  console.log("Solution is ", solution);
}

module.exports = { day1 }
