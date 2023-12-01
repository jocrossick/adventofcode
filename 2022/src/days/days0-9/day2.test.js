const { readFile } = require("../../files/read");
const { day2 } = require("./day2");

xdescribe("day2 test runs", () => {
    test("day 2 part 1", () => {
      const day2Result = day2(readFile("days0-9/day2-test1"), 1);
      expect(day2Result).toStrictEqual(15);
    });
  
    test("day 2 part 2", () => {
      const day2Result = day2(readFile("days0-9/day2-test1"), 2);
      expect(day2Result).toStrictEqual(12);
    });
  });

xdescribe("day2 solution", () => {
  test("day 2 part 1", () => {
    const day2Result = day2(readFile("days0-9/day2"), 1);
    expect(day2Result).toStrictEqual(12855);
  });

  test("day 2 part 2", () => {
    const day2Result = day2(readFile("days0-9/day2"), 2);
    expect(day2Result).toStrictEqual(13726);
  });
});
