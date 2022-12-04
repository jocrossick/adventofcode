const { readFile } = require("../files/read");
const { day3 } = require("./day3");

xdescribe("day3 test runs", () => {
  test("day 3 TDD", () => {
    const day3Result = day3(['HChCTnnLCgCrTZPPFzzVPcVD'], 1);
    expect(day3Result).toStrictEqual(46);
  });

  test("day 3 part 1 test", () => {
    const day3Result = day3(readFile("day3-test1"), 1);
    expect(day3Result).toStrictEqual(157);
  });

  test("day 3 part 2 test", () => {
    const input = ['vJrwpWtwJgWrhcsFMMfFFhFp',
      'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
      'PmmdzqPrVvPwwTWBwg']
    const results = day3(input, 2);
    expect(results).toStrictEqual(18);
  })
});

xdescribe("day3 answers", () => {
  test("day 3 part 1", () => {
    const day3Result = day3(readFile("day3"), 1);
    expect(day3Result).toStrictEqual(8123);
  });
  test("day 3 part 2", () => {
    const day3Result = day3(readFile("day3"), 2);
    expect(day3Result).toStrictEqual(2620);
  });

});
