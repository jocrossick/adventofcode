const { readFile } = require("../read.js");

const day3 = () => {
  const rawInput = readFile("input.txt");
  const lineLength = rawInput[0].length;
  const rowsLength = rawInput.length;
  let countXmas = 0;

  rawInput.forEach((line, lineIndex) => {
    console.log("FOREACH Line index", lineIndex, line.split(''));
    line.split('').forEach((letter, letterIndex) => {
      console.log("FOREACH letter index", letterIndex);
      if (letter == "X" || letter == "S") {
        countXmas = countXmas +
        readLeftRight(rawInput, lineIndex, letterIndex, lineLength, rowsLength) +
        readTopBottom(rawInput, lineIndex, letterIndex, lineLength, rowsLength) +
        readDiagonalFwd(rawInput, lineIndex, letterIndex, lineLength, rowsLength) +
        readDiagonalbkwd(rawInput, lineIndex, letterIndex, lineLength, rowsLength)
      }
    })
  });

  console.log("Count is", countXmas); //2545
}

const readLeftRight = (rawInput, lineIndex, letterIndex, lineLength, rowsLength) => {
  console.log("readLeftRight", lineIndex, letterIndex);
  const val = rawInput[lineIndex].slice(letterIndex, letterIndex + 4);
  if (val == "XMAS" || val == "SAMX") {
    console.log("Returning true", val);
    return 1;
  }
  console.log("Returning false", val);
  return 0;
}

const readTopBottom = (rawInput, lineIndex, letterIndex, lineLength, rowsLength) => {
  if (lineIndex > rowsLength - 4) {
    console.log("readTopBottom : Too short"), lineIndex, letterIndex;
    return 0;
  }
  const arr = [];
  for (let i = lineIndex; i < lineIndex + 4; i++) {
    const letter = rawInput[i].charAt(letterIndex);
    arr.push(letter);
  }

  if (testArr(arr)) {
    console.log("readTopBottom Returning true", lineIndex, letterIndex, arr);
    return 1;
  }
  console.log("readTopBottom Returning false", lineIndex, letterIndex, arr);
  return 0;
}

const readDiagonalFwd = (rawInput, lineIndex, letterIndex, lineLength, rowsLength) => {
  if (lineIndex > rowsLength - 4 || letterIndex > lineLength - 4) {
    console.log("readDiagonalFwd: Too short", lineIndex, letterIndex);
    return 0;
  }
  const arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(rawInput[lineIndex + i].charAt(letterIndex + i));
  }
  if (testArr(arr)) {
    console.log("readDiagonalFwd Returning true", lineIndex, letterIndex, arr);
    return 1;
  }
  console.log("readDiagonalFwd Returning false", lineIndex, letterIndex, arr);
  return 0;
}

const readDiagonalbkwd = (rawInput, lineIndex, letterIndex, lineLength, rowsLength) => {
  if (lineIndex > rowsLength - 4 || letterIndex < 3) {
    console.log("readDiagonalbkwd: Too short", lineIndex, letterIndex);
    return 0;
  }
  const arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(rawInput[lineIndex + i].charAt(letterIndex - i));
  }
  if (testArr(arr)) {
    console.log("readDiagonalbkwd Returning true", lineIndex, letterIndex, arr);
    return 1;
  }
  console.log("readDiagonalbkwd Returning false", lineIndex, letterIndex, arr);
  return 0;
}

const testArr = (arr) => {
  if (arr[0] == 'X' && arr[1] == 'M' && arr[2] == 'A' && arr[3] == 'S') {
    return true;
  }
  if (arr[0] == 'S' && arr[1] == 'A' && arr[2] == 'M' && arr[3] == 'X') {
    return true;
  }
  return false;
}

const today = () => day3();
module.exports = { today };
