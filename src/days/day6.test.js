const { readFile } = require("../files/read");
const { day6 } = require("./day6");

describe("day6 test runs", () => {
  test("day 6 part 1 test 1", () => {
    const result = day6('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 1);
    expect(result).toStrictEqual(7);
  });
  test("day 6 part 1 test 1", () => {
    const result = day6('bvwbjplbgvbhsrlpgdmjqwftvncz', 1);
    expect(result).toStrictEqual(5);
  });
  test("day 6 part 1 test 1", () => {
    const result = day6('nppdvjthqldpwncqszvftbrmjlhg', 1);
    expect(result).toStrictEqual(6);
  });
  test("day 6 part 1 test 1", () => {
    const result = day6('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 1);
    expect(result).toStrictEqual(10);
  });
  test("day 6 part 1 test 1", () => {
    const result = day6('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 1);
    expect(result).toStrictEqual(11);
  });
});

describe("Day 6 results", () => {
    test("day 6 part 1 test 1", () => {
        const result = day6(readFile("day6")[0], 1);
        expect(result).toStrictEqual(1287);
      });
    
})