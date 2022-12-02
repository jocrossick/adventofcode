//1 for Rock, 2 for Paper, and 3 for Scissors

const lose = 0;
const draw = 3;
const win = 6;
const lookups = [
  {
    A: 1, //"rock",
    B: 2, //"paper",
    C: 3, //"scissors",
    X: 1, //"rock",
    Y: 2, //"paper",
    Z: 3, //"scissors",
  },
  {
    A: 1, //"rock",
    B: 2, //"paper",
    C: 3, //"scissors",
    X: 0, //"lose",
    Y: 3, //"draw",
    Z: 6, //"win",
  },
];

const day2 = (input, part) =>
  input
    .map((entry) => [
      lookups[part - 1][entry.charAt(0)],
      lookups[part - 1][entry.charAt(2)],
    ])
    .map((entry) => score(part)(entry[0], entry[1]) + entry[1])
    .reduce((acc, curr) => acc + curr);

const winner = (them, you) => {
  if (them - you == 0) {
    return draw;
  }
  if ((you - them + 3) % 3 == 1) {
    return win;
  }
  return lose;
};

const play = (them, strategy) => {
  if (strategy == draw) {
    return them;
  }
  if (strategy == win) {
    return them + 1 < 4 ? them + 1 : (them + 1) % 3;
  }
  return them + 2 < 4 ? them + 2 : (them + 2) % 3;
};

const score = (part) => (part == 1 ? winner : play);

module.exports = { day2 };
