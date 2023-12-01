const { input, testInput1, testInput2 } = require("./day12data");
const parseArray = (input) =>
  input.split(/\n/).map((entry) => {
    return {
      action: entry.substring(0, 1),
      move: parseInt(entry.substring(1)),
    };
  });

//console.log("Input array entry on 5th row should be L90", parseArray(input)[5]);

//    N-0
// W-3   E-1
//    S-2

// Action N means to move north by the given value.
// Action S means to move south by the given value.
// Action E means to move east by the given value.
// Action W means to move west by the given value.
// Action L means to turn left the given number of degrees.
// Action R means to turn right the given number of degrees.
// Action F means to move forward by the given value in the direction the ship is currently facing.

const consolidatedMovesPart1 = (input) =>
  input.reduce(
    (acc, row) => {
      switch (row.action) {
        case "N":
          acc.position[0] = acc.position[0] + row.move;
          break;
        case "E":
          acc.position[1] = acc.position[1] + row.move;
          break;
        case "S":
          acc.position[2] = acc.position[2] + row.move;
          break;
        case "W":
          acc.position[3] = acc.position[3] + row.move;
          break;
        case "F":
          acc.position[acc.direction] = acc.position[acc.direction] + row.move;
          break;
        case "R":
          acc.direction = (acc.direction + row.move / 90) % 4;
          break;
        case "L":
          acc.direction = (acc.direction + 4 - row.move / 90) % 4;
          break;
      }
      return acc;
    },
    { direction: 1, position: [0, 0, 0, 0] }
  );

const consolidatedMovesPart2 = (input, position) => {
  let waypoint = position;
  let ship = [0, 0];
  input.forEach((row) => {
    switch (row.action) {
      case "E":
        waypoint[0] = waypoint[0] + row.move;
        break;
      case "W":
        waypoint[0] = waypoint[0] - row.move;
        break;
      case "N":
        waypoint[1] = waypoint[1] + row.move;
        break;
      case "S":
        waypoint[1] = waypoint[1] - row.move;
        break;
      case "F":
        ship = [
          ship[0] + row.move * waypoint[0],
          ship[1] + row.move * waypoint[1],
        ];
        break;
      case "R":
        for (let i = 0; i < row.move / 90; i++) {
          waypoint = [waypoint[1], waypoint[0] * -1];
        }
        break;
      case "L":
        for (let i = 0; i < row.move / 90; i++) {
          waypoint = [waypoint[1] * -1, waypoint[0]];
        }
        break;
    }
    console.log("ship is", ship);
  });
  return ship;
};

//Test one:
//Right three turns E -> S -> W -> N
//Forward 10 (North)
//Left 3 turns N -> W -> S -> E
//Forward 20 (East)
//array [10,20,0,0]
//console.log(consolidatedMoves(parseArray(testInput1)));

//Actual run
//Part 1 - 2847
const endPosition = consolidatedMovesPart2(parseArray(input), [10, 1]);
console.log(endPosition);
console.log(
  "Manhatten distance is",
  Math.abs(endPosition[0]) + Math.abs(endPosition[1])
);
