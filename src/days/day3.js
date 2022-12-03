const score = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const day3 = (input, part) => {
    
  let elfGroups = [];
  if (part == 2) {
    for (let i = 3; i <= input.length; i = i + 3) {
      elfGroups.push(input.slice(i - 3, i));
    }
  } else {
    elfGroups = input.map(
      (rucksack => [
        rucksack.slice(0, rucksack.length / 2),
        rucksack.slice(rucksack.length / 2),
      ])
    );
  }

  const groupNames = elfGroups
    .map((group) => getMatchingItemsFromArray(group))
    .flat();
  return groupNames
    .map((letter) => score.indexOf(letter))
    .reduce((acc, curr) => acc + curr);
};

const getMatchingItemsFromArray = (arr) => {
  let matchingItems = [...arr[0].split("")];
  arr.forEach((element) => {
    matchingItems = Array.from(
      new Set(
        matchingItems.filter((char) =>
          element.indexOf(char) > -1 ? true : false
        )
      )
    );
  });
  return matchingItems;
};

module.exports = { day3Part1, day3 };
