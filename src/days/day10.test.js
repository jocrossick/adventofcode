const { readFile } = require("../files/read");
const { day10 } = require("./day10");

describe("day10 test runs part 1", () => {
  test("Day 10 short example", () => {
    const result = day10(["noop", "addx 3", "addx -5"], 1);
    expect(result).toStrictEqual(-1);
  });

  test("day 10 part 1 test 1", () => {
    const result = day10(readFile("day10-test"), 1);
    expect(result).toStrictEqual(13140);
  });

  xtest("day 10 part 2", () => {
    const result = day10(readFile("day10-test"), 2);
    expect(result).toStrictEqual(1);
  });
});

describe("day10 answer", () => {
  test("day 10 part 1 answer", () => {
    const result = day10(readFile("day10"), 1);
    expect(result).toStrictEqual(14360);
  });

  xtest("day 10 part 2", () => {
    const result = day10(readFile("day10"), 2);
    expect(result).toStrictEqual(1);
  });
});
