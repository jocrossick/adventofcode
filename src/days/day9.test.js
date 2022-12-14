const { readFile } = require("../files/read");
const { day9 } = require("./day9");

describe("day9 test runs part 1", () => {

  test("day 9 part 1 test 1", () => {
    const result = day9(readFile("day9-test"), 1);
    expect(result).toStrictEqual(13);
  });

  xtest("day 9 part 2", () => {
    const result = day9(readFile("day9-test"), 2);
    expect(result).toStrictEqual(9);    
  })
});

describe("day9 answer", () => {

    test("day 9 part 1 answer", () => {
      const result = day9(readFile("day9"), 1);
      expect(result).toStrictEqual(6175);
    });
  
    xtest("day 9 part 2", () => {
      const result = day9(readFile("day9"), 2);
      expect(result).toStrictEqual(268800);    
    })
  });