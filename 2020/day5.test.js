const { findHighestSeat, parseData, calcSeatId } = require("./day5");
const { input } = require("./day5data");
const { test, expect } = require("@jest/globals");

test("it converts the row to a number", () => {
    expect(calcSeatId('FFFFBFBRRR')).toEqual(47);
    expect(calcSeatId('BFBFBBBLLL')).toEqual(696);
    expect(calcSeatId('FFBBBBBLLL')).toEqual(248);
    expect(calcSeatId('BFFBBBBRLL')).toEqual(636);
  });

test("It parses the data", () => {
    const testData = `FFBLR
BFFRL
FBFRR`;
    expect(parseData(testData)).toEqual([`FFBLR`, `BFFRL`, `FBFRR`]);
})

test("It parses the actual data", () => {
    expect(parseData(input)).toHaveLength(874);
})

test("It finds the highest seat number", () => {
    const testData = [`BFBFBBBLLL`, `FFBBBBBLLL`, `BFFBBBBRLL`];
    expect(findHighestSeat(testData)).toBe(696);
})