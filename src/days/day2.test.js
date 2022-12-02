const { readFile } = require("../files/read");
const { day2pt1, day2pt2 } = require("./day2");

describe("day2 test runs", () => {
    test("day 2 part 1", () => {
      const day2Result = day2pt1(readFile("day2-test1"));
      expect(day2Result).toStrictEqual(15);
    });
  
    test("day 2 part 2", () => {
      const day2Result = day2pt2(readFile("day2-test1"));
      expect(day2Result).toStrictEqual(12);
    });
  });

describe("day2 solution", () => {
  test("day 2 part 1", () => {
    const day2Result = day2pt1(readFile("day2"));
    expect(day2Result).toStrictEqual(12855);
  });

  test("day 2 part 2", () => {
    const day2Result = day2pt2(readFile("day2"));
    expect(day2Result).toStrictEqual(11797); //too low
  });
});
