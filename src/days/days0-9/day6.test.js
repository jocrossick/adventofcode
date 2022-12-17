const { readFile } = require("../../files/read");
const { day6 } = require("./day6");

xdescribe("day6 test runs part 1", () => {
  test("day 6 part 1 test 1", () => {
    const result = day6("mjqjpqmgbljsphdztnvjfqwrcgsmlb", 1);
    expect(result).toStrictEqual(7);
  });
  test("day 6 part 1 test 1", () => {
    const result = day6("bvwbjplbgvbhsrlpgdmjqwftvncz", 1);
    expect(result).toStrictEqual(5);
  });
  test("day 6 part 1 test 1", () => {
    const result = day6("nppdvjthqldpwncqszvftbrmjlhg", 1);
    expect(result).toStrictEqual(6);
  });
  test("day 6 part 1 test 1", () => {
    const result = day6("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 1);
    expect(result).toStrictEqual(10);
  });
  test("day 6 part 1 test 1", () => {
    const result = day6("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 1);
    expect(result).toStrictEqual(11);
  });
});
xdescribe("day6 test runs part 1", () => {
  test("day 6 part 2 test 1", () => {
    const result = day6("mjqjpqmgbljsphdztnvjfqwrcgsmlb", 2);
    expect(result).toStrictEqual(19);
  });
  test("day 6 part 2 test 1", () => {
    const result = day6("bvwbjplbgvbhsrlpgdmjqwftvncz", 2);
    expect(result).toStrictEqual(23);
  });
  test("day 6 part 2 test 1", () => {
    const result = day6("nppdvjthqldpwncqszvftbrmjlhg", 2);
    expect(result).toStrictEqual(23);
  });
  test("day 6 part 2 test 1", () => {
    const result = day6("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 2);
    expect(result).toStrictEqual(29);
  });
  test("day 6 part 2 test 1", () => {
    const result = day6("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 2);
    expect(result).toStrictEqual(26);
  });
});

xdescribe("Day 6 results", () => {
  test("day 6 part 1", () => {
    const result = day6(readFile("days0-9/day6")[0], 1);
    expect(result).toStrictEqual(1287);
  });
  test("day 6 part 2", () => {
    const result = day6(readFile("days0-9/day6")[0], 2);
    expect(result).toStrictEqual(3716);
  });
});
