const { readFile } = require("../files/read");
const { day11, monkeyParser } = require("./day11");

describe("day11 test runs part 1", () => {
  xtest("regex parsing test", () => {
    const monkeyArr = [
      "Monkey 0:",
      "  Starting items: 79, 98",
      "  Operation: new = old * 19",
      "  Test: divisible by 23",
      "    If true: throw to monkey 2",
      "    If false: throw to monkey 3"];
    let result = monkeyParser(monkeyArr);
    const anonFunc = Function("old", "return old * 19");
    //expect(result).toMatchObject({"ifFalse": "3", "ifTrue": "2", "items": [79, 98], "monkeyNum": "0", "operation": anonFunc, "test": "23"})
    const testAdds =  Function("old", "return old + 1");
    expect(testAdds(1)).toEqual(2);
    const testSubtract =  Function("old", "return old - 1");
    expect(testSubtract(10)).toEqual(9);
    const testMultiply =  Function("old", "return old * 2");
    expect(testMultiply(3)).toEqual(6);
    const testDivide =  Function("old", "return old / 10");
    expect(testDivide(100)).toEqual(10);

  });

  xtest("day 11 part 1 test moves", () => {
    const monkeys1 = day11(readFile("day11-test"), 1, 1);
    expect(monkeys1[0].items).toStrictEqual([20, 23, 27, 26]);
    expect(monkeys1[1].items).toStrictEqual([2080, 25, 167, 207, 401, 1046]);
    expect(monkeys1[2].items).toStrictEqual([]);
    expect(monkeys1[3].items).toStrictEqual([]);

    const monkeys2 = day11(readFile("day11-test"), 2, 1);
    expect(monkeys2[0].items).toStrictEqual([695, 10, 71, 135, 350]);
    expect(monkeys2[1].items).toStrictEqual([43, 49, 58, 55, 362]);
    expect(monkeys2[2].items).toStrictEqual([]);
    expect(monkeys2[3].items).toStrictEqual([]);

    const monkeys20 = day11(readFile("day11-test"), 20, 1);
    expect(monkeys20[0].items).toStrictEqual([10, 12, 14, 26, 34]);
    expect(monkeys20[1].items).toStrictEqual([245, 93, 53, 199, 115]);
    expect(monkeys20[2].items).toStrictEqual([]);
    expect(monkeys20[3].items).toStrictEqual([]);

  });

  test("Day 11 part 1 test",() => {
    const monkeys20 = day11(readFile("day11-test"), 20, 1);
    expect(monkeys20).toStrictEqual(10605);

  })

  xtest("day 11 part 2", () => {
    const result = day11(readFile("day11-test"), 10000, 2);
    expect(result).toStrictEqual(2713310158);
   });
});

describe("day11 answer", () => {
  test("day 11 part 1 answer", () => {
    const result = day11(readFile("day11"), 20, 1);
    expect(result).toStrictEqual(56120);
  });

  xtest("day 11 part 2", () => {
    const result = day11(readFile("day11"), 10000, 2);
    expect(result).toStrictEqual(8119992305); //too low
  });
});
