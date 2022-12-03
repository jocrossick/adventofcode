const score = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const day3Part1 = (input) => {
  const scoresAll = input.map((rucksack) =>
    getMatchingItems(
      rucksack.slice(0, rucksack.length / 2),
      rucksack.slice(rucksack.length / 2)
    ).map((letter) => score.indexOf(letter))
  );
  return scoresAll.flat().reduce((acc, curr) => acc + curr);
};

const getMatchingItems = (first, second) =>
  Array.from(
    new Set(
      first
        .split("")
        .filter((char) => (second.indexOf(char) > -1 ? true : false))
    )
  );

module.exports = { day3Part1 };
