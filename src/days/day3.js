const score = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const day3Part2 = (input) => {
    const elfGroups = [];
    for(let i = 0; i < input.length; i = i+3) {
        elfGroups.push([input[i], input[i+1], input[i+2]])
    }
    const groupNames = elfGroups.map(group => getMatchingItems(getMatchingItems(group[0].split(""), group[1].split("")), group[2].split(""))).flat();
    return groupNames.map((letter) => score.indexOf(letter)).reduce((acc, curr) => acc + curr);
}

const day3Part1 = (input) => {
  const scoresAll = input.map((rucksack) =>
    getMatchingItems(
      rucksack.slice(0, rucksack.length / 2).split(""),
      rucksack.slice(rucksack.length / 2).split("")
    ).map((letter) => score.indexOf(letter))
  );
  return scoresAll.flat().reduce((acc, curr) => acc + curr);
};

const getMatchingItems = (first, second) =>
//console.log("getMatchingItems with", first, second) || 
  Array.from(
    new Set(
      first
        .filter((char) => (second.indexOf(char) > -1 ? true : false))
    )
  );

module.exports = { day3Part1, day3Part2 };
