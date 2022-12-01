const { readFile } = require("../files/read");
const { day1 } = require("./day1");

describe("day1 solution part 1", () => {
  test("day 1 part 1", () => {
    const day1Result = day1(readFile("day1"), 1);
    expect(day1Result).toStrictEqual(70509);
  });

  test("day 1 part 2", () => {
    const day1Result = day1(readFile("day1"), 2);
    expect(day1Result).toStrictEqual(208567);
  });
});
