const { readFile } = require("../files/read");
const { day5 } = require("./day5");

xdescribe("day5 test runs", () => {
  test("day 5 test", () => {
    const result = day5(readFile("day5-test1"), 1);
    expect(result).toStrictEqual('CMZ');
  });
  test("day 5 test part 2", () => {
    const result = day5(readFile("day5-test1"), 2);
    expect(result).toStrictEqual('MCD');
  });
})

xdescribe("day5 answer", () => {
  test("day 5 answer", () => {
    const result = day5(readFile("day5"), 1);
    expect(result).toStrictEqual('RLFNRTNFB');
  });
  test("day 5 answer part 2", () => {
    const result = day5(readFile("day5"), 2);
    expect(result).toStrictEqual('MHQTLJRLB');
  });
})