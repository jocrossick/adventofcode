const { readFile } = require("../read.js");

const day1 = () => {

  const rawInput = readFile(false);

  const firstArr = [];
  const secondArr = [];

  rawInput.forEach(line => {
    if (line.length > 0) {
      [first, second] = line.split("   ");
      firstArr.push(parseInt(first));
      secondArr.push(parseInt(second));
    }
  });

  firstArr.sort();
  secondArr.sort();

  part1(firstArr, secondArr);

  part2(firstArr, secondArr);

};

const part1 = (firstArr, secondArr) => {
  let runningSum = 0;
  for (let i = 0; i < firstArr.length; i++) {
    const diff = Math.abs(firstArr[i] - secondArr[i]);
    runningSum += diff;
  }

  console.log("Part 1 ", runningSum);
}

const part2 = (firstArr, secondArr) => {

  frequencyLookup = secondArr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    }
    else {
      acc[curr] = 1;
    }
    return acc;
  }, {})

  const simscore = firstArr.reduce((acc, curr) => {
    const valToAdd = frequencyLookup[curr] ? curr*frequencyLookup[curr] : 0;
    return acc+valToAdd;
  }, 0);

  console.log("Part 2 - Similarity score is ", simscore);
}

const today = () => day1();
module.exports = { today };
