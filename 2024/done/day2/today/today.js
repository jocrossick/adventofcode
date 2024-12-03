const { readFile } = require("../read.js");

const day2 = () => {

  const rawInput = readFile(false);

  const data1 = day2Part1(rawInput);
  const data2 = day2Part2(rawInput);

  const safeLines1 = data1.filter(entry => entry.isSafe);
  const safeLines2 = data2.filter(entry => entry.isSafe);

  console.log("Part 1: Number of safe lines: ", safeLines1.length); //663
  console.log("Part 2: Number of safe lines: ", safeLines2.length); //Greater than 690
}

const day2Part2 = rawInput => {
  const data = rawInput.map((line, index) => {

    const arr = line.split(' ');
    let indexFirstAsc = 999;
    let indexFirstDesc = 999;
    let indexFirstEqual = 999;
    let indexFirstGap = 999;
    let countEqual = 0;
    let countAsc = 0;
    let countDesc = 0;
    let countGap = 0;

    for (let i = 1; i< arr.length; i++) {
      if (arr[i-1]-arr[i] > 0) {
        indexFirstAsc = i;
        countAsc++;
      }
      if (arr[i-1]-arr[i] < 0) {
        indexFirstDesc = i;
        countDesc++;
      }
      if (arr[i-1]-arr[i] == 0) {
        indexFirstEqual = i;
        countEqual++;
      }
      if (Math.abs(arr[i-1]-arr[i]) > 3) {
        indexFirstGap = i;
        countGap++;
      }
    }

    if ((countAsc <= 0 || countDesc <= 0) && countEqual <=0 && countGap <= 0) {
      return  {
        lineNo: index,
        arr,
        isSafe: true
      }
    }

    if ((countAsc > 1 && countDesc > 1)
      || (countEqual > 1)
      || (countGap > 1)
    ) {
      return {
        lineNo: index,
        arr,
        isSafe: false
      }
    }

    const firstErrorIndex = Math.min(indexFirstAsc, indexFirstDesc, indexFirstEqual, indexFirstGap);

    const newArr1 = arr.filter((line, index) => index != firstErrorIndex);
    const newLineData1 = getLine(newArr1);
    if (newLineData1.isSafe) {
      return {
        lineNo: index,
        arr: newArr1,
        isSafe: true
      }
    }

    const newArr3 = arr.filter((line, index) => index != firstErrorIndex+1);
    const newLineData3 = getLine(newArr3);
    if (newLineData3.isSafe) {
      return {
        lineNo: index,
        arr: newArr1,
        isSafe: true
      }
    }

    const newArr2 = arr.filter((line, index) => index != firstErrorIndex-1);
    const newLineData2 = getLine(newArr2);
    return {
      lineNo: index,
      arr: newArr2,
      isSafe: newLineData2.isSafe
    }
  });


  console.log(data);

  return data;
}


const day2Part1 = rawInput => {
  const data = rawInput.map((line, index) => {
    if (line.length < 1) {
      return;
    }
    const arr = line.split(' ');
    return getLine(arr, index);
  });

  console.log(data);
  return data;
}

const getLine = (arr, index) => {
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

}

const today = () => day2();
module.exports = { today };
