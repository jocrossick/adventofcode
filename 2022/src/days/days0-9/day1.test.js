const { readFile } = require("../../files/read");
const { day1 } = require("./day1");

xdescribe("day1 test runs", () => {
    test("day 1 part 1", () => {
      const day1Result = day1(readFile("days0-9/day1-test1"), 1);
      expect(day1Result).toStrictEqual(24000);
    });
  
    test("day 1 part 2", () => {
      const day1Result = day1(readFile("days0-9/day1-test1"), 2);
      expect(day1Result).toStrictEqual(45000);
    });
  });

xdescribe("day1 solution", () => {
  test("day 1 part 1", () => {
    const day1Result = day1(readFile("days0-9/day1"), 1);
    expect(day1Result).toStrictEqual(70509);
  });

  test("day 1 part 2", () => {
    const day1Result = day1(readFile("days0-9/day1"), 2);
    expect(day1Result).toStrictEqual(208567);
  });
});
