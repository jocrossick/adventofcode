const {
  parseDataPart1,
  parseDataPart2,
  countAnswersPart1,
  matchingAnswersPerGroup,
} = require("./day6");
const { test, expect } = require("@jest/globals");

describe("Part 2", () => {
  test("it parses data correctly", () => {
    const testData38 = `obegcmqadtrhui
qbgocuzeimrhdat
icuagdbztxrqehoy
cuietqhbfroagds
uqdgikwhrvcjeltbpao

arke
qzr
plmgnr
uriq`;
    expect(parseDataPart2(testData38)).toEqual([
      [
        "obegcmqadtrhui",
        "qbgocuzeimrhdat",
        "icuagdbztxrqehoy",
        "cuietqhbfroagds",
        "uqdgikwhrvcjeltbpao",
      ],
      ["arke", "qzr", "plmgnr", "uriq"],
    ]);
  });

  test("It finds matching letters for each entry in a group", () => {
    const testData = ["abcxyz",
"abc"];
    expect(matchingAnswersPerGroup(testData)).toEqual(["a", "b", "c"]);
  });

  test("It finds matching letters for each entry in a group 2", () => {
    const testData = ["acxyz",
"abc"];
    expect(matchingAnswersPerGroup(testData)).toEqual(["a", "c"]);
  });
});

describe("part1", () => {
  test("it parses the data correctly", () => {
    const testdata = `ab
    
    c
    d`;
    expect(parseDataPart1(testdata)).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  test("it dedupes entries", () => {
    const testdata = `ab
    
    cf
    df`;

    expect(parseDataPart1(testdata)).toEqual([
      ["a", "b"],
      ["c", "f", "d"],
    ]);
  });

  test("it counts entries", () => {
    const testdata4 = `ab
    
    a
    b`;
    const testdata5 = `ab
      
      cf
      df`;

    const testData38 = `obegcmqadtrhui
qbgocuzeimrhdat
icuagdbztxrqehoy
cuietqhbfroagds
uqdgikwhrvcjeltbpao

arke
qzr
plmgnr
uriq`;
    expect(countAnswersPart1(parseDataPart1(testdata4))).toEqual(4);
    expect(countAnswersPart1(parseDataPart1(testdata5))).toEqual(5);
    expect(countAnswersPart1(parseDataPart1(testData38))).toEqual(38);
  });
});
