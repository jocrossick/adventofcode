const day1 = (input, part) => {
  const addedCalories = [];
  input
    .map((a) => parseInt(a))
    .reduce(
      (acc, curr) =>
        isNaN(curr) ? Math.min(addedCalories.push(acc), 0) : acc + curr,
      0
    );

  const sortedAddedCalories = addedCalories.sort((a, b) => a - b);
  const part1Solution = sortedAddedCalories[addedCalories.length - 1];
  const part2Solution =
    sortedAddedCalories[addedCalories.length - 1] +
    sortedAddedCalories[addedCalories.length - 2] +
    sortedAddedCalories[addedCalories.length - 3];

  console.log("Part 1 is", part1Solution);
  console.log("Part 2 is", part2Solution);

  if (part == 2) {
    return part2Solution;
  }
  return part1Solution;
};

module.exports = { day1 };
