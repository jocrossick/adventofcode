const { readFile } = require("../files/read");
const { day4 } = require("./day4");

describe("day4 test runs", () => {
  test("day 4 test", () => {
    const day4Result = day4(readFile("day4-test1"), 1);
    expect(day4Result).toStrictEqual(2);
  });
});

describe("day4 results", () => {
    test("day 4 result", () => {
      const day4Result = day4(readFile("day4"), 1);
      expect(day4Result).toStrictEqual(431);
    });
  });