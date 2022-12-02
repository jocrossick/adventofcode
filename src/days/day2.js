//1 for Rock, 2 for Paper, and 3 for Scissors

const lose = 0;
const draw = 3;
const win = 6;
const lookups1 = {
  A: 1, //"rock",
  B: 2, //"paper",
  C: 3, //"scissors",
  X: 1, //"rock",
  Y: 2, //"paper",
  Z: 3, //"scissors",
  //   rock: 1,
  //   paper: 2,
  //   scissors: 3,
};
const lookups2 = {
  A: 1, //"rock",
  B: 2, //"paper",
  C: 3, //"scissors",
  X: 0, //"lose",
  Y: 3, //"draw",
  Z: 6, //"win",
  //   rock: 1,
  //   paper: 2,
  //   scissors: 3,
};
//win
//1 -> 2
//2 -> 3

// 1, 2 - win(1); //3
// 2, 3 - win(1); //5
// 3, 1 - win(-2); //4
// 1, 3 - lose(2); //4
// 2, 1 - lose(-1);
// 3, 2 - lose(-1);

const day2pt1 = (input) =>
  input
    .map((entry) => [lookups1[entry.charAt(0)], lookups1[entry.charAt(2)]])
    .map((entry) => winner(entry[0], entry[1]) + entry[1])
    .reduce((acc, curr) => acc + curr);

const day2pt2 = (input) =>
  input
    .map((entry) => [lookups2[entry.charAt(0)], lookups2[entry.charAt(2)]])
    .map((entry) => play(entry[0], entry[1]) + entry[1])
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
    return (them + 1) < 4 ? (them + 1) : (them + 1) % 3;
  }
  return (them + 2) < 4 ? (them + 2) : (them + 2) % 3;
};

module.exports = { day2pt1, day2pt2 };
