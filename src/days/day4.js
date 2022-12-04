const day4 = (input, part) => {
  const sectionPairs = input
    .map((pair) =>
      pair
        .split(",")
        .map((section) => section.split("-").map((number) => parseInt(number)))
    )
    .filter(
      (pair) =>
        (pair[0][0] >= pair[1][0] && pair[0][1] <= pair[1][1]) ||
        (pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1])
    );
  return sectionPairs.length;
};

module.exports = { day4 };
