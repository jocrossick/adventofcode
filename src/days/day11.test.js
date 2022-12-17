const { readFile } = require("../files/read");
const { day11 } = require("./day11");

describe("day11 test runs part 1", () => {
  test("day 11 part 1 test 1", () => {
    const result = day11(readFile("day11-test"), 1);
    expect(result).toStrictEqual(1);
  });

  test("day 11 part 2", () => {
    const result = day11(readFile("day11-test"), 2);
    expect(result).toStrictEqual(1);
   });
});

xdescribe("day11 answer", () => {
  test("day 11 part 1 answer", () => {
    const result = day11(readFile("day11"), 1);
    expect(result).toStrictEqual(14360);
  });

  test("day 11 part 2", () => {
    const result = day11(readFile("day11"), 2);
    expect(result).toStrictEqual(1);
  });
});
