const { readFile } = require("../files/read");
const { day3 } = require("./day3");

describe("day3 test runs", () => {
  test("day 3 TDD", () => {
    const day3Result = day3(['HChCTnnLCgCrTZPPFzzVPcVD'], 1);
    expect(day3Result).toStrictEqual(46);
  });

  test("day 3 part 1 test", () => {
    const day3Result = day3(readFile("day3-test1"), 1);
    expect(day3Result).toStrictEqual(157);
  });
});

describe("day3 answers", () => {
  test("day 3 part 1", () => {
    const day3Result = day3(readFile("day3"), 1);
    expect(day3Result).toStrictEqual(8123);
  });

});
