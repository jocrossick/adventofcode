const { readFile } = require("../read.js");

const day3 = () => {
  const rawInput = readFile("input.txt");
  const lineLength = rawInput[0].length;
  const rowsLength = rawInput.length;

  //part 1
  let countXmas = 0;
  rawInput.forEach((line, lineIndex) => {
    console.log("FOREACH Line index", lineIndex, line.split(''));
    line.split('').forEach((letter, letterIndex) => {
      console.log("FOREACH letter index", letterIndex);
      if (letter == "X" || letter == "S") {
        countXmas = countXmas +
        readLeftRight1(rawInput, lineIndex, letterIndex, lineLength, rowsLength) +
        readTopBottom1(rawInput, lineIndex, letterIndex, lineLength, rowsLength) +
        readDiagonalFwd1(rawInput, lineIndex, letterIndex, lineLength, rowsLength) +
        readDiagonalbkwd1(rawInput, lineIndex, letterIndex, lineLength, rowsLength)
      }
    })
  });

  console.log("Count is", countXmas); //2545

    //part 2
    let countXmas2 = 0;
    rawInput.forEach((line, lineIndex) => {
      console.log("FOREACH Line index", lineIndex, line.split(''));
      line.split('').forEach((letter, letterIndex) => {
        console.log("FOREACH letter index", letterIndex);
        if (letter == "A") {

          const horiztonal = readLeftRight2(rawInput, lineIndex, letterIndex, lineLength, rowsLength);
          const vertical = readTopBottom2(rawInput, lineIndex, letterIndex, lineLength, rowsLength);
          const diagonal1 = readDiagonalFwd2(rawInput, lineIndex, letterIndex, lineLength, rowsLength);
          const diagonal2 = readDiagonalbkwd2(rawInput, lineIndex, letterIndex, lineLength, rowsLength);

          if (horiztonal && vertical) {
            countXmas2++;
          }
          if (diagonal1 && diagonal2) {
            countXmas2++;
          }
        }
      })
    });

    console.log("Count is", countXmas2);
}

const readLeftRight1 = (rawInput, lineIndex, letterIndex, lineLength, rowsLength) => {
  console.log("readLeftRight", lineIndex, letterIndex);
  const val = rawInput[lineIndex].slice(letterIndex, letterIndex + 4);
  if (val == "XMAS" || val == "SAMX") {
    console.log("Returning true", val);
    return 1;
  }
  console.log("Returning false", val);
  return 0;
}

const readTopBottom1 = (rawInput, lineIndex, letterIndex, lineLength, rowsLength) => {
  if (lineIndex > rowsLength - 4) {
    console.log("readTopBottom : Too short"), lineIndex, letterIndex;
    return 0;
  }
  const arr = [];
  for (let i = lineIndex; i < lineIndex + 4; i++) {
    const letter = rawInput[i].charAt(letterIndex);
    arr.push(letter);
  }

  if (testArr1(arr)) {
    console.log("readTopBottom Returning true", lineIndex, letterIndex, arr);
    return 1;
  }
  console.log("readTopBottom Returning false", lineIndex, letterIndex, arr);
  return 0;
}

const readDiagonalFwd1 = (rawInput, lineIndex, letterIndex, lineLength, rowsLength) => {
  if (lineIndex > rowsLength - 4 || letterIndex > lineLength - 4) {
    console.log("readDiagonalFwd: Too short", lineIndex, letterIndex);
    return 0;
  }
  const arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(rawInput[lineIndex + i].charAt(letterIndex + i));
  }
  if (testArr1(arr)) {
    console.log("readDiagonalFwd Returning true", lineIndex, letterIndex, arr);
    return 1;
  }
  console.log("readDiagonalFwd Returning false", lineIndex, letterIndex, arr);
  return 0;
}

const readDiagonalbkwd1 = (rawInput, lineIndex, letterIndex, lineLength, rowsLength) => {
  if (lineIndex > rowsLength - 4 || letterIndex < 3) {
    console.log("readDiagonalbkwd: Too short", lineIndex, letterIndex);
    return 0;
  }
  const arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(rawInput[lineIndex + i].charAt(letterIndex - i));
  }
  if (testArr1(arr)) {
    console.log("readDiagonalbkwd Returning true", lineIndex, letterIndex, arr);
    return 1;
  }
  console.log("readDiagonalbkwd Returning false", lineIndex, letterIndex, arr);
  return 0;
}

const testArr1 = (arr) => {
  if (arr[0] == 'X' && arr[1] == 'M' && arr[2] == 'A' && arr[3] == 'S') {
    return true;
  }
  if (arr[0] == 'S' && arr[1] == 'A' && arr[2] == 'M' && arr[3] == 'X') {
    return true;
  }
  return false;
}

const readLeftRight2 = (rawInput, lineIndex, letterIndex, lineLength, rowsLength) => {
  if (letterIndex > lineLength - 2 || letterIndex == 0) {
    console.log("readLeftRight2 : Too short"), lineIndex, letterIndex;
    return 0;
  }
  console.log("readLeftRight", lineIndex, letterIndex);
  const val = rawInput[lineIndex].slice(letterIndex-1, letterIndex + 1);
  if (val == "MAS" || val == "SAM") {
    console.log("Returning true", val);
    return 1;
  }
  console.log("Returning false", val);
  return 0;
}

const readTopBottom2 = (rawInput, lineIndex, letterIndex, lineLength, rowsLength) => {
  if (lineIndex > rowsLength - 2 || lineIndex == 0) {
    console.log("readTopBottom : Too short"), lineIndex, letterIndex;
    return 0;
  }
  const arr = [];
  for (let i = lineIndex-1; i < lineIndex + 2; i++) {
    const letter = rawInput[i].charAt(letterIndex);
    arr.push(letter);
  }

  if (testArr2(arr)) {
    console.log("readTopBottom Returning true", lineIndex, letterIndex, arr);
    return 1;
  }
  console.log("readTopBottom Returning false", lineIndex, letterIndex, arr);
  return 0;
}

const readDiagonalFwd2 = (rawInput, lineIndex, letterIndex, lineLength, rowsLength) => {
  if (lineIndex > rowsLength - 2 || lineIndex == 0 || letterIndex > lineLength - 2 || letterIndex == 0) {
    console.log("readDiagonalFwd: Too short", lineIndex, letterIndex);
    return 0;
  }
  const arr = [];
  for (let i = -1; i < 2; i++) {
    arr.push(rawInput[lineIndex + i].charAt(letterIndex + i));
  }
  if (testArr2(arr)) {
    console.log("readDiagonalFwd Returning true", lineIndex, letterIndex, arr);
    return 1;
  }
  console.log("readDiagonalFwd Returning false", lineIndex, letterIndex, arr);
  return 0;
}

const readDiagonalbkwd2 = (rawInput, lineIndex, letterIndex, lineLength, rowsLength) => {
  if (lineIndex > rowsLength - 2 || lineIndex == 0 || letterIndex > lineLength - 2 || letterIndex == 0) {
    console.log("readDiagonalbkwd2: Too short", lineIndex, letterIndex);
    return 0;
  }
  const arr = [];
  for (let i = -1; i < 2; i++) {
    arr.push(rawInput[lineIndex + i].charAt(letterIndex - i));
  }
  if (testArr2(arr)) {
    console.log("readDiagonalbkwd Returning true", lineIndex, letterIndex, arr);
    return 1;
  }
  console.log("readDiagonalbkwd Returning false", lineIndex, letterIndex, arr);
  return 0;
}

const testArr2 = (arr) => {
  if (arr[0] == 'M' && arr[1] == 'A' && arr[2] == 'S') {
    return true;
  }
  if (arr[0] == 'S' && arr[1] == 'A' && arr[2] == 'M') {
    return true;
  }
  return false;
}

const today = () => day3();
module.exports = { today };
