const { readFile } = require("../read.js");

const day6 = () => {
  const rawInput = readFile("test.txt");
  const mapArr = rawInput.map(line => line.split(''));

  const isEdge = createIsEdge(mapArr);
  const isValidCoord = createIsValidCoord(mapArr);

  const up = 0;
  const right = 1;
  const down = 2;
  const left = 3;
  const row = 0;
  const column = 1;
  const direction = 2;

  let guard = [0, 0, up]; //row, column, direction
  let coordVisited = mapArr.map(line => line.map(position => [false, false, false, false]));
  let possibleObstacles = mapArr.map(line => line.map(position => false));

  mapArr.forEach((line, lineIndex) => line.forEach((letter, letterIndex) => {
    if (letter == "^") {
      guard = [lineIndex, letterIndex, up];
    }
  }));

  coordVisited[guard[row]][guard[column]][guard[direction]] = true;
  let breakpoint = 0;
  while (!isEdge(guard) && breakpoint <1000000) {
    breakpoint++;

    let newRowPosition = guard[row];
    let nextRowPosition = guard[row];
    let newLinePosition = guard[column];
    let nextLinePosition = guard[column];
    let nextGuardDirection = (guard[direction]+1)%4;

    if (guard[direction] == up) {
      newRowPosition = newRowPosition -1;
      nextRowPosition = nextRowPosition -2;
    } else if (guard[direction] == right) {
      newLinePosition = newLinePosition +1;
      nextLinePosition = nextLinePosition +2;
    } else if (guard[direction] == down) {
      newRowPosition = newRowPosition +1;
      nextRowPosition = nextRowPosition +2;
    } else if (guard[direction] == left) {
      newLinePosition = newLinePosition -1;
      nextLinePosition = nextLinePosition -2;
    }

    guard[row] = newRowPosition;
    guard[column] = newLinePosition;

    if (isValidCoord(nextRowPosition, nextLinePosition)) {
      const nextSquare = mapArr[nextRowPosition][nextLinePosition];
      if (nextSquare == "#") {
        guard[direction] = nextGuardDirection;
      }
      if (coordVisited[guard[row]][guard[column]][nextGuardDirection]) {
        possibleObstacles[nextRowPosition][nextLinePosition] = true;
      }
    }

    if (guard[row] > 7) {
      console.log("Adding coord", guard[row], guard[column], guard[direction]);
      console.log("Adding coords visited", row, column, direction);
    }
    coordVisited[guard[row]][guard[column]][guard[direction]] = true;
    }

  console.log("Possible obstacles", possibleObstacles);
  const obstaclesCount = possibleObstacles.reduce((acc1, row) => acc1 + row.reduce((acc2, column) => column ? acc2+1 : acc2, 0), 0);
  console.log("obstaclesCount", obstaclesCount); //

  console.log("coordVisited is", coordVisited);
  const coordsCount = coordVisited.reduce((acc1, line) => {
    const lineCount = line.reduce((acc2, position) => {
      if (position[up] || position[right] || position[down] || position[left]) {
        acc2++
      };
      return acc2;
    }, 0);
    console.log(lineCount);
    return acc1 + lineCount;
  }, 0);
  console.log("coordVisited", coordsCount); //4939
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

const createIsValidCoord = (mapArr) => {
  const isValidCoord = (nextRow, nextLine) => {
    if (nextRow < 0 || nextLine < 0) {
      return false;
    }
    if (nextLine >= mapArr[0].length) {
      return false;
    }
    if (nextRow >= mapArr.length) {
      return false;
    }
    return true;
  }
  return isValidCoord;
}


const today = () => day6();
module.exports = { today };
