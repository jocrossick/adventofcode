const { readFile } = require("../files/read");
const { day8 } = require("./day8");

xdescribe("day8 test runs part 1", () => {

  test("day 8 part 1 test 1", () => {
    const result = day8(readFile("day8-test"), 1);
    expect(result).toStrictEqual(21);
  });

  test("day 8 part 2", () => {
    const result = day8(readFile("day8-test"), 2);
    expect(result).toStrictEqual(8);    
  })
});

xdescribe("day8 answer", () => {

    test("day 8 part 1 answer", () => {
      const result = day8(readFile("day8"), 1);
      expect(result).toStrictEqual(1736);
    });
  
    test("day 8 part 2", () => {
      const result = day8(readFile("day8"), 2);
      expect(result).toStrictEqual(268800);    
    })
  });