const { readFile } = require("../../useful/read");
const forwardRegex = /[0-9]|one|two|three|four|five|six|seven|eight|nine/g;
const backwardsRegex = /[0-9]|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/g;

//Your puzzle answer was 54388.
const day1_part1 = (filename) => {

  const entries = readFile('day1', filename);
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

//53515
const day1_part2 = (filename) => {

  const entries = readFile('day1', filename);
  console.log("Number of entries is ", entries.length);
  const numbersToAdd = entries.map(entry => {
    if (entry.length <= 0) {
      return 0;
    }

    const targetNumber = parseNumberPhrase(entry);
    return parseInt(targetNumber);
  });

  const solution = numbersToAdd.reduce((acc, number) => acc + number, 0);

  return solution;
};

const parseNumberPhrase = anEntryString => {
  const forwardNumbers = anEntryString.match(forwardRegex);
  const backwardsNumbers = anEntryString.split('').reverse().reduce((str, char) => str+char).match(backwardsRegex);


  const firstNumber = getNumber(forwardNumbers[0]);
  const secondNumber = getNumber(backwardsNumbers[0]);
  return firstNumber.concat(secondNumber);
}

const getNumber = (aNumberString, isFirst) => {
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
    case 'eno':
      return '1';
    case 'owt':
      return '2';
    case 'eerht':
      return '3';
    case 'ruof':
      return '4';
    case 'evif':
      return '5';
    case 'xis':
      return '6';
    case 'neves':
      return '7';
    case 'thgie':
      return '8';
    case 'enin':
      return '9';
    default:
      return aNumberString;
  }
}

if(parseNumberPhrase('oneight') != '18') {
  console.log("oneight first test failed");
}
if(parseNumberPhrase('eighthree') != '83') {
  console.log("eighthree last test failed");
}
if(parseNumberPhrase('eighthreeight') != '88') {
  console.log("eighthreeight last test failed");
}


const day1 = () => {
  const solution = day1_part2("day1-part1")
  console.log("Solution is ", solution);
}

module.exports = { day1 }
