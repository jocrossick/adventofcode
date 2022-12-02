//1 for Rock, 2 for Paper, and 3 for Scissors

const lose = 0;
const draw = 3;
const win = 6;
const lookups = {
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
// 1, 2 - win(1);
// 2, 3 - win(1);
// 3, 1 - win(-2);
// 1, 3 - lose(2);
// 2, 1 - lose(-1);
// 3, 2 - lose(-1);

const day2 = (input) =>
  input
    .map((entry) => [lookups[entry.charAt(0)], lookups[entry.charAt(2)]])
    .map((entry) => winner(entry[0], entry[1]) + entry[1])
    .reduce((acc, curr) => acc + curr);

const winner = (them, you) => {
  if (them == you) {
    return draw;
  }
  if (you - them == 1 || you - them == -2) {
    return win;
  }
  return lose;
};

module.exports = { day2 };
