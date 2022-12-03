const { readFile } = require("../files/read");
const { day3Part1 } = require("./day3");

describe("day3 test runs", () => {
  test("day 3 TDD", () => {
    const day3Result = day3Part1(['HChCTnnLCgCrTZPPFzzVPcVD'], 1);
    expect(day3Result).toStrictEqual(46);
  });

  test("day 3 part 1 test", () => {
    const day3Result = day3Part1(readFile("day3-test1"), 1);
    expect(day3Result).toStrictEqual(157);
  });

  xtest("day 3 part 2 test", () => {
    const input = ['vJrwpWtwJgWrhcsFMMfFFhFp',
      'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
      'PmmdzqPrVvPwwTWBwg']
    const results = day3Part2(input, 2);
    expect(results).toStrictEqual(3);
  })
});

describe("day3 answers", () => {
  test("day 3 part 1", () => {
    const day3Result = day3Part1(readFile("day3"), 1);
    expect(day3Result).toStrictEqual(8123);
  });

});
