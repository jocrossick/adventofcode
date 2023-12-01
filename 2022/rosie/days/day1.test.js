const { readFile } = require("../files/read");
const { day1 } = require("./day1");

xdescribe("day1 test runs", () => {
    test("day 1 part 1", () => {
      const day1Result = day1(readFile("day1-test"), 1);
      //expect(day1Result).toStrictEqual(24000);
    });
  });

xdescribe("day1 solution", () => {
  test("day 1 part 1", () => {
    const day1Result = day1(readFile("days0-9/day1"), 1);
    expect(day1Result).toStrictEqual(70509);
  });
});