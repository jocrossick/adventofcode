const { readFile } = require("../read.js");

const day2 = () => {

  const rawInput = readFile(false);

  const data = rawInput.map((line, index) => {
    if (line.length < 1) {
      return;
    }
    const arr = line.split(' ');
    let isDescending = true;
    let isAscending = true;
    let gapLessThan4 = true;

    for (let i = 1; i< arr.length; i++) {
      if (arr[i-1]-arr[i] >= 0) {
        isAscending = false;
      }
      if (arr[i-1]-arr[i] <= 0) {
        isDescending = false;
      }
      if (Math.abs(arr[i-1]-arr[i]) > 3) {
        gapLessThan4 = false;
      }
    }
    return {
      lineNo: index,
      arr,
      isDescending,
      isAscending,
      gapLessThan4,
      isSafe: (isAscending || isDescending) && gapLessThan4
    }
  });
  console.log(data)

  const safeLines = data.filter(entry => entry.isSafe);

  console.log("Part 1: Number of safe lines: ", safeLines.length);
}

const today = () => day2();
module.exports = { today };
