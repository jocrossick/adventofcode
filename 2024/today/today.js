const { readFile } = require("../read.js");

const day6 = () => {
  const rawInput = readFile("test.txt");

  const mapArr = rawInput.map(line => line.split(''));

  let guardPosition = [0, 0]; //lineNum, charNum
  let guardDirection = "up"; //up|right|down|right

  mapArr.forEach((line, lineIndex) => line.forEach((letter, letterIndex) => {
    if (letter == "^") {
      guardPosition = [lineIndex, letterIndex];
    }
  }));

  const isEdge = createIsEdge(mapArr);

  let coordVisited = mapArr.map(line => line.map(position => false));

  coordVisited[guardPosition[0]][guardPosition[1]] = true;
  let breakpoint = 0;
  while (!isEdge(guardPosition) && breakpoint <100) {

    breakpoint++;

    let nextSquare = [];
    if (guardDirection == "up") {
      guardPosition = [guardPosition[0] -1, guardPosition[1]];
      if (!isEdge(guardPosition)) {
        if (mapArr[guardPosition[0] -1][guardPosition[1]] == "#") {
          guardDirection = "right";
        }
      }
    }
    else if (guardDirection == "right") {
      guardPosition = [guardPosition[0], guardPosition[1] + 1];
      if (!isEdge(guardPosition)) {
        nextSquare = mapArr[guardPosition[0]][guardPosition[1] +1];
        if (nextSquare == "#") {
          guardDirection = "down";
        }
    }
    }
    else if (guardDirection == "down") {
      guardPosition = [guardPosition[0] +1, guardPosition[1]];
      if (!isEdge(guardPosition)) {
        nextSquare = mapArr[guardPosition[0] +1][guardPosition[1]];
        if (nextSquare == "#") {
          guardDirection = "left";
        }
      }
    }
    else if (guardDirection == "left") {
      guardPosition = [guardPosition[0], guardPosition[1] -1];
      if (!isEdge(guardPosition)) {
        nextSquare = mapArr[guardPosition[0]][guardPosition[1] -1];
        if (nextSquare == "#") {
          guardDirection = "up";
        }
      }
    }

    coordVisited[guardPosition[0]][guardPosition[1]] = true;
  }
  console.log("coordVisited is", coordVisited);
  const coordsCount = coordVisited.reduce((acc1, line) => acc1 + line.reduce((acc2, position) => { if (position) {acc2++}; return acc2; }, 0), 0);
  console.log("coordVisited", coordsCount);
}

const createIsEdge = (mapArr) => {
  const isEdge = (guardPosition) => {
    if (guardPosition[0] ==0) {
      return true;
    }
    if (guardPosition[1] ==0) {
      return true;
    }
    if (guardPosition[0] == mapArr[0].length -1) {
      return true;
    }
    if (guardPosition[1] == mapArr.length -1) {
      return true;
    }
    return false;
  }
  return isEdge;
}


const today = () => day6();
module.exports = { today };
