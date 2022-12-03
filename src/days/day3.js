const score = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const day3 = (input, part) => {
  const scores = input.map((rucksack) =>
    rucksack
      .slice(0, rucksack.length / 2)
      .split("")
      .filter((char) =>
        rucksack.slice(rucksack.length / 2).indexOf(char) > -1 ? true : false
      )
      .map((letter) => score.indexOf(letter))
  );
  return scores.reduce((acc, curr) => acc + curr[0], 0);
};

module.exports = { day3 };
