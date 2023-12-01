const { input } = require("./day7data");

const findOuterBags = (rules, innerBag) => {
  const uniqueOuterBags = new Set();
  const outerBags = rules
    .filter((rule) => rule.indexOf(innerBag) > 0)
    .map((rule) => rule.substring(0, rule.indexOf(" bags contain ")));
  outerBags.forEach((bag) => uniqueOuterBags.add(bag));
  uniqueOuterBags.forEach((bag) =>
    findOuterBags(rules, bag).forEach((bag) => uniqueOuterBags.add(bag))
  );
  return uniqueOuterBags;
};

//296
console.log(
  "The answer to part 1 is",
  findOuterBags(input.split(/\n/), "shiny gold").size
);

const findBagNesting = (rules, outerBag) => {
  const rulesForOuterBag = parseLine(
    rules.filter((line) => line.indexOf(outerBag) == 0)[0]
  );

  if (rulesForOuterBag.length == 0) {
    return 0;
  }

  return rulesForOuterBag.reduce(
    (acc, rule) =>
      acc + (findBagNesting(rules, rule.colour) + 1) * rule.quantity,
    0
  );
};

const parseLine = (line) => {
  const contains = line
    .split(" bags contain ")[1]
    .split(/ bags, | bag, | bag\.| bags\./g);
  contains.pop();

  if (contains.length == 1 && contains[0] == "no other") {
    return [];
  }

  const bags = contains.map((bagString) => {
    return {
      quantity: parseInt(bagString.substring(0, 1)),
      colour: bagString.substring(2),
    };
  });

  return bags;
};

//9339
console.log(
  "The answer to part 2 is",
  findBagNesting(input.split(/\n/), "shiny gold")
);

module.exports = { findOuterBags, findBagNesting, parseLine };
