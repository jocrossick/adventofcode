const { input } = require("./day5data");

const parseData = (data) => data.split(/\r?\n/);

const calcSeatId = (row) =>
  parseInt(row.replaceAll(/F|L/g, 0).replaceAll(/B|R/g, 1), 2);

// const findHighestSeat = (array) =>
//   array.reduce((acc, row) => Math.max(acc, calcSeatId(row)), 0);

const findHighestSeat = (array) =>
  Math.max(...array.map((row) => calcSeatId(row)));

const findLowestSeat = (array) =>
  array.reduce((acc, row) => Math.min(acc, calcSeatId(row)), 999);

const findMissingSeats = (arr) =>
  arr
    .map((row) => calcSeatId(row))
    .sort((a, b) => a - b)
    .reduce(
      (acc, seat, i, seats) =>
        seats[i - 1] != seat - 1 && i != 0 ? acc.push(seat - 1) && acc : acc,
      []
    );

//A: 747
console.log("The missing seats are", findMissingSeats(parseData(input)));

//A: 922
console.log(
  "The highest seat id in the dataset is",
  findHighestSeat(parseData(input))
);

//A: 48
console.log(
  "The lowest seat id in the dataset is",
  findLowestSeat(parseData(input))
);

module.exports = { parseData, findHighestSeat, calcSeatId };
