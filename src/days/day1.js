const day1 = (input, part) => {
  const topIndex = part == 1 ? 0 : 2;
  let addedCalories = new Array(topIndex + 1);
  addedCalories.fill(0);
  input
    .map((a) => parseInt(a))
    .reduce(
      (acc, curr) =>
        isNaN(curr)
          ? addedCalories.sort((a, b) => a - b)[0] >= acc
            ? 0
            : Math.min((addedCalories[0] = acc), 0)
          : acc + curr,
      0
    );

  return addedCalories.reduce((acc, curr) => acc + curr);
};

module.exports = { day1 };
