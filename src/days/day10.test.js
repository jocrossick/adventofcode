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

  test("day 10 part 2", () => {
    const result = day10(readFile("day10-test"), 2);
    const line1 = "##..##..##..##..##..##..##..##..##..##..";
    const line2 = "###...###...###...###...###...###...###.";
    const line3 = "####....####....####....####....####....";
    const line4 = "#####.....#####.....#####.....#####.....";
    const line5 = "######......######......######......####";
    const line6 = "#######.......#######.......#######.....";
    const resultArr = result.split('\n')
    expect(resultArr[0]).toStrictEqual(line1);
    expect(resultArr[1]).toStrictEqual(line2);
    expect(resultArr[2]).toStrictEqual(line3);
    expect(resultArr[3]).toStrictEqual(line4);
    expect(resultArr[4]).toStrictEqual(line5);
    expect(resultArr[5]).toStrictEqual(line6);
   });
});

describe("day10 answer", () => {
  test("day 10 part 1 answer", () => {
    const result = day10(readFile("day10"), 1);
    expect(result).toStrictEqual(14360);
  });

  test("day 10 part 2", () => {
    const result = day10(readFile("day10"), 2);
    expect(result).toStrictEqual(1);
  });
});
