const { readFile } = require("../files/read");
const { day5 } = require("./day5");

describe("day5 test runs", () => {
  test("day 5 test", () => {
    const result = day5(readFile("day5-test1"), 1);
    expect(result).toStrictEqual('CMZ');
  });
})

describe("day5 answer", () => {
  test("day 5 answer", () => {
    const result = day5(readFile("day5"), 1);
    expect(result).toStrictEqual('RLFNRTNFB');
  });
})