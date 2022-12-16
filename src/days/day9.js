const day9 = (input, part) => {
  let length = 2;
  if (part == 2) {
    length = 10;
  }
  let curr = new Array(length).fill(0).map((each) => [0, 0]);
  let history = [];

  input.forEach((instruction) => {
    const [direction, repetitions] = instruction.split(" ");
    for (let i = 0; i < parseInt(repetitions); i++) {
      history.push([...curr.map((each) => [...each])]);

      move(direction)(curr[0]);
      curr.forEach((entry, index) => cascade(entry, curr[index + 1]));
    }
  });

  history.push([...curr.map((each) => [...each])]);

  return history.map((entry) => entry[entry.length - 1])
  .sort()
  .filter(
    (position, index, arr) =>
      index == 0 ||
      position[0] != arr[index - 1][0] ||
      position[1] != arr[index - 1][1]
  ).length;
};

const move = (direction) => {
  switch (direction) {
    case "R":
      return (head) => (head[0] = head[0] + 1);
    case "L":
      return (head) => (head[0] = head[0] - 1);
    case "U":
      return (head) => (head[1] = head[1] + 1);
    case "D":
      return (head) => (head[1] = head[1] - 1);
    default:
      console.log("Direction was not recognised", direction);
      break;
  }
};

const cascade = (thisOne, nextOne) => {
  if (nextOne == undefined) {
    return;
  }
  if (thisOne[0] - nextOne[0] == 2) {
    nextOne[0] = nextOne[0] + 1;
    nextOne[1] = thisOne[1];
  } else if (thisOne[0] - nextOne[0] == -2) {
    nextOne[0] = nextOne[0] - 1;
    nextOne[1] = thisOne[1];
  } else if (thisOne[1] - nextOne[1] == 2) {
    nextOne[1] = nextOne[1] + 1;
    nextOne[0] = thisOne[0];
  } else if (thisOne[1] - nextOne[1] == -2) {
    nextOne[1] = nextOne[1] - 1;
    nextOne[0] = thisOne[0];
  }
};

module.exports = { day9 };
