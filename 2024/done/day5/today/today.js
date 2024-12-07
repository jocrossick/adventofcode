const { readFile } = require("../read.js");

const day4 = () => {
  const rawInput = readFile("input.txt");

  const blankLineIndex = rawInput.indexOf('');

  const sortRawArr = rawInput.slice(0, blankLineIndex);
  const sortArr = sortRawArr.map(line => line.split("|").map(num => parseInt(num)));
  const pagesRawArr = rawInput.slice(blankLineIndex+1, rawInput.length)
  const pagesArr = pagesRawArr.map(line => line.split(",").map(num => parseInt(num)));

  console.log(sortArr);
  console.log(pagesArr);
  const filterFunction = createFilterFunction(sortArr);
  const sortFunction = createSortFunction(sortArr);

  const correctLines = [];
  const incorrectLines = [];

  pagesArr.forEach((line, index) => {
    console.log("Processing line", index);
    let isSorted = true;
    let i = 0;
    while (isSorted &&  i < line.length - 1) {
      isSorted = filterFunction(line[i], line[i+1]);
      i++
    }
    if (isSorted) {
      correctLines.push(line);
    }
    else {
      incorrectLines.push(line);
    }
  });

  console.log("filteredLines", correctLines);

  // const sum = correctLines.reduce((acc, line) => {
  //   const middleNum = line[(line.length-1)/2];
  //   console.log("Middle num is", middleNum);
  //   return acc + middleNum;
  // }, 0);
  // console.log("Part 1 is", sum); //5248

  incorrectLines.forEach(line => line.sort(sortFunction));

  const sumPart2 = incorrectLines.reduce((acc, line) => {
    const middleNum = line[(line.length-1)/2];
    console.log("Middle num is", middleNum);
    return acc + middleNum;
  }, 0);
  console.log("Part 2 is", sumPart2); //5248


}

const createFilterFunction = (sortArr) => {
  const filterFunction = (b, a) => {
    console.log("Sorting entries", a, b);
    const matches = sortArr.filter(entry => (entry[0] == a && entry[1] == b) || (entry[1] == a && entry[0] == b));
    console.log("matches",matches);

    if (matches.length != 1) {
      console.log("Sorted");
      return false;
    }
    if (matches[0][0] == a && matches[0][1] == b) {
      console.log("Sorted");
      return false;
    }
    if (matches[0][0] == b && matches[0][1] == a) {
      console.log("Unsorted");
      return true;
    }
    console.error("Should not have got to this point", a, b, sortArr);
    return false;
  }
  return filterFunction;
}

const createSortFunction = (sortArr) => {
  const sortFunction = (b, a) => {
    console.log("Sorting entries", a, b);
    const matches = sortArr.filter(entry => (entry[0] == a && entry[1] == b) || (entry[1] == a && entry[0] == b));
    console.log("matches",matches);

    if (matches.length != 1) {
      console.log("Sorted");
      return 1;
    }
    if (matches[0][0] == a && matches[0][1] == b) {
      console.log("Sorted");
      return 1;
    }
    if (matches[0][0] == b && matches[0][1] == a) {
      console.log("Unsorted");
      return -1;
    }
    console.error("Should not have got to this point", a, b, sortArr);
    return 1;
  }
  return sortFunction;
}


const today = () => day4();
module.exports = { today };
