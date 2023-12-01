const { input, testInput } = require("./day11data");

const padArray = (input) => {
  const emptyRow = [];
  for (let i = 0; i < input[0].length; i++) {
    emptyRow.push(".");
  }
  input.unshift([...emptyRow]);
  input.push([...emptyRow]);
  input.map((row) => row.unshift(".") && row.push("."));
  return input;
};

const getNewOccupancy = (input, rowNo, seatNo) => {

    let seatTopLeft = ".";
    let rowCoord = rowNo;
  let seatCoord = seatNo;
  while (rowCoord > 0 && seatCoord > 0 && seatTopLeft == ".") {
    rowCoord = rowCoord - 1;
    seatCoord = seatCoord - 1;
    seatTopLeft = input[rowCoord][seatCoord];
  }

  let seatTop = ".";
  rowCoord = rowNo;
  seatCoord = seatNo;
  while (rowCoord > 0 && seatCoord > 0 && seatTop == ".") {
    rowCoord = rowCoord - 1;
    seatTop = input[rowCoord][seatCoord];
  }

  let seatTopRight = ".";
  rowCoord = rowNo;
  seatCoord = seatNo;
  while (rowCoord > 0 && seatCoord < input[rowCoord].length -1 && seatTopRight == ".") {
    rowCoord = rowCoord - 1;
    seatCoord++;
    seatTopRight = input[rowCoord][seatCoord];
  }

  let seatLeft = ".";
  rowCoord = rowNo;
  seatCoord = seatNo;
  while (seatCoord > 0 && seatLeft == ".") {
    seatCoord = seatCoord -1;
    seatLeft = input[rowCoord][seatCoord];
  }

  let seatRight = ".";
  rowCoord = rowNo;
  seatCoord = seatNo;
  while (seatCoord < input[rowCoord].length -1 && seatRight == ".") {
    seatCoord++;
    seatRight = input[rowCoord][seatCoord];
  }

  let seatBottomLeft = ".";
  rowCoord = rowNo;
  seatCoord = seatNo;
  while (rowCoord < input.length -1 && seatCoord > 0 && seatBottomLeft == ".") {
    rowCoord++;
    seatCoord = seatCoord -1;
    seatBottomLeft = input[rowCoord][seatCoord];
  }

  let seatBottom = ".";
  rowCoord = rowNo;
  seatCoord = seatNo;
  while (rowCoord < input.length -1 && seatBottom == ".") {
    rowCoord++;
    seatBottom = input[rowCoord][seatCoord];
  }

  let seatBottomRight = ".";
  rowCoord = rowNo;
  seatCoord = seatNo;
  while (rowCoord < input.length -1 && seatCoord < input[rowCoord].length -1 && seatBottomRight == ".") {
    rowCoord++;
    seatCoord++;
    seatBottomRight = input[rowCoord][seatCoord];
  }

  const surrounds = [seatTopLeft, seatTop, seatTopRight, seatLeft, seatRight, seatBottomLeft, seatBottom, seatBottomRight];
  const numberOfOccupiedSeats = surrounds.filter((seat) => seat == "#").length;

  if (input[rowNo][seatNo] == "L" && numberOfOccupiedSeats == 0) {
    return "#";
  }
  if (input[rowNo][seatNo] == "#" && numberOfOccupiedSeats >= 5) {
    return "L";
  }
  return input[rowNo][seatNo];
};

const getNewArrayPart1 = (input) => {
  let hasChange = false;
  const newArray = input.map((row, rowNo) => {
    return row.map((seat, seatNo) => {
      if (seat == ".") {
        return ".";
      }
      const newOccupancy = getNewOccupancy(input, rowNo, seatNo);
      if (seat != newOccupancy) {
        hasChange = true;
      }
      return newOccupancy;
    });
  });
  return [newArray, hasChange];
};

const stableArrayPart1 = (input) => {
  let hasChange = true;
  let prevArray;
  let newArray = padArray(input);
  while (hasChange) {
    prevArray = newArray;
    [newArray, hasChange] = getNewArrayPart1(prevArray);
  }
  return newArray;
};

const countOccupiedSeats = (input) => {
  return input.reduce(
    (acc1, row) =>
      acc1 +
      row.reduce((acc2, seat) => {
        if (seat == "#") {
          acc2++;
        }
        return acc2;
      }, 0),
    0
  );
};

const testArray = testInput.split(/\n/).map((row) => row.split(""));
const paddedTestArray = padArray(testArray);
// const firstPass = getNewArrayPart1(paddedTestArray)[0];
// const secondPass = getNewArrayPart1(firstPass)[0];
// const thirdPass = getNewArrayPart1(secondPass)[0];
// console.log("firstPass is", firstPass.map(row => row.reduce((acc, seat) => acc.concat(seat), '')));
// console.log("secondPass is", secondPass.map(row => row.reduce((acc, seat) => acc.concat(seat), '')));
// console.log("Third pass is", thirdPass);

const inputArray = input.split(/\n/).map((row) => row.split(""));
const paddedInputArray = padArray(inputArray);

//2164, 1974
console.log(
  "Number of occupiedSeats",
  countOccupiedSeats(stableArrayPart1(paddedInputArray))
);

// const testArray2 = [
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '#', '.', 'L', 'L', '.', 'L', 'L', '.', 'L', '#', '.'],
//     ['.', '#', 'L', 'L', 'L', 'L', 'L', 'L', '.', 'L', 'L', '.'],
//     ['.', '#', '.', 'L', '.', 'L', '.', '.', 'L', '.', '.', '.'],
//     ['.', '#', 'L', 'L', 'L', '.', 'L', 'L', '.', 'L', 'L', '.'],
//     ['.', '#', '.', 'L', 'L', '.', 'L', 'L', '.', 'L', 'L', '.'],
//     ['.', '#', '.', 'L', 'L', 'L', 'L', 'L', '.', 'L', 'L', '.'],
//     ['.', '.', '.', 'L', '.', 'L', '.', '.', '.', '.', '.', '.'],
//     ['.', '#', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', '#', '.'],
//     ['.', '#', '.', 'L', 'L', 'L', 'L', 'L', 'L', '.', 'L', '.'],
//     ['.', '#', '.', 'L', 'L', 'L', 'L', 'L', '.', 'L', '#', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']]
// console.log(getNewOccupancy(testArray2, 2, 3));