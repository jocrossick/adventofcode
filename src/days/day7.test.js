const { readFile } = require("../files/read");
const { day7, getStructure } = require("./day7");

xdescribe("day7 test runs part 1", () => {

  test("day 7 part 1 test 1", () => {
    const result = day7(readFile("day7-test"), 1);
    expect(result).toStrictEqual(95437);
  });
});

describe("day7 answer", () => {

    test("day 7 part 1", () => {
      const result = day7(readFile("day7"), 1);
      expect(result).toStrictEqual(95437);
    });
  });
  