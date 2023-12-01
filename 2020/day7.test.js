const { findOuterBags, findBagNesting, parseLine } = require("./day7");
const { test, expect } = require("@jest/globals");

test("can find the outer bags for an inner bag", () => {
  const testRules = `drab gold bags contain 5 dark aqua bags, 2 dim tan bags.
mirrored magenta bags contain 3 dotted violet bags.
posh black bags contain 3 dark lavender bags, 3 mirrored coral bags, 1 dotted chartreuse bag, 2 dim tan bags.
posh tomato bags contain 2 posh black bags.`;

  const expectedVal = new Set();
  expectedVal.add("drab gold");
  expectedVal.add("posh black");
  expectedVal.add("posh tomato");

  expect(findOuterBags(testRules.split(/\n/), "dim tan")).toEqual(expectedVal);
});

test("can find the right nesting of bags 1", () => {
    const testRules = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain no other bags.`;
  //2 dark red bags
  //4 dark orange bags
  //6 bags in total
  
    expect(findBagNesting(testRules.split(/\n/), "shiny gold", 1)).toEqual(6);
  });

test("can find the right nesting of bags 2", () => {
  const testRules = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`;

  expect(findBagNesting(testRules.split(/\n/), "shiny gold", 1)).toEqual(126);
});

test("parses a line to find contents", () => {
  expect(parseLine("dark red bags contain 2 dark orange bags.")).toEqual([
    { quantity: 2, colour: "dark orange" },
  ]);
  expect(parseLine("dark violet bags contain no other bags.")).toEqual([]);
});
