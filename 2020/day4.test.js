const { testDataParse, testDataCount } = require("./day4data");
const { parseData, findValidPassports,validBirthYear, validIssueYear, validExpirationYear, validHeight, validPid, validHairColour,validEyeColour } = require("./day4");
const { test, expect } = require("@jest/globals");

test("parseData - splits correctly", () => {
  const val1 = {
    eyr: '2027',
    hcl: "#602927",
    hgt: "186cm",
    byr: '1939',
    iyr: '2019',
    pid: '552194973',
    ecl: "hzl",
  };

  const val2 = {
    pid: '657988073',
    eyr: '2020',
    byr: '1996',
    ecl: "brn",
    hcl: "#866857",
    iyr: '2015',
    hgt: "164cm",
  };

  const val3 = {
    hcl: "#fffffd",
    byr: '1951',
    cid: '321',
    iyr: '2017',
    eyr: '2022',
    ecl: "brn",
    hgt: "62in",
    pid: "#6ef4e1",
  };

  expect(parseData(testDataParse)).toEqual([val1, val2, val3]);
});

test("validateData - returns the correct passports", () => {
    expect(findValidPassports(parseData(testDataCount))).toHaveLength(1);
  });

describe('validBirthYear', () => {
    test('it is present', () => {
        expect(validBirthYear(undefined)).toBe(false);
    });
    test('it is a number', () => {
        expect(validBirthYear('abc')).toBe(false);
    });
    test('it meets boundary conditions', () => {
        expect(validBirthYear('1919')).toBe(false);
        expect(validBirthYear('1920')).toBe(true);
        expect(validBirthYear('2002')).toBe(true);
        expect(validBirthYear('2003')).toBe(false);
    });
});

describe('validIssueYear', () => {
    test('it is present', () => {
        expect(validIssueYear(undefined)).toBe(false);
    });
    test('it is a number', () => {
        expect(validIssueYear('abc')).toBe(false);
    });
    test('it meets boundary conditions', () => {
        expect(validIssueYear('2009')).toBe(false);
        expect(validIssueYear('2010')).toBe(true);
        expect(validIssueYear('2020')).toBe(true);
        expect(validIssueYear('2021')).toBe(false);
    });
});

describe('validExpirationYear', () => {
    test('it is present', () => {
        expect(validExpirationYear(undefined)).toBe(false);
    });
    test('it is a number', () => {
        expect(validExpirationYear('abc')).toBe(false);
    });
    test('it meets boundary conditions', () => {
        expect(validExpirationYear('2019')).toBe(false);
        expect(validExpirationYear('2020')).toBe(true);
        expect(validExpirationYear('2030')).toBe(true);
        expect(validExpirationYear('2031')).toBe(false);
    });
});

describe('validHeight', () => {
    test('it is present', () => {
        expect(validHeight(undefined)).toBe(false);
    });
    test('it is either cm or in', () => {
        expect(validHeight('160')).toBe(false);
        expect(validHeight('160xx')).toBe(false);
    });
    test('it meets cm boundary conditions', () => {
        expect(validHeight('149cm')).toBe(false);
        expect(validHeight('150cm')).toBe(true);
        expect(validHeight('193cm')).toBe(true);
        expect(validHeight('194cm')).toBe(false);
    });
    test('it meets in boundary conditions', () => {
        expect(validHeight('58in')).toBe(false);
        expect(validHeight('59in')).toBe(true);
        expect(validHeight('76in')).toBe(true);
        expect(validHeight('77in')).toBe(false);
    });
});

describe('validPid', () => {
    test('it is present', () => {
        expect(validPid(undefined)).toBe(false);
    });
    test('it is a number', () => {
        expect(validPid('abc')).toBe(false);
    });
    test('it meets boundary conditions', () => {
        expect(validPid('0000000000')).toBe(false);
        expect(validPid('000000000')).toBe(true);
        expect(validPid('00000000')).toBe(false);
    });
});

describe('validHairColour', () => {
    test('it is present', () => {
        expect(validHairColour(undefined)).toBe(false);
    });
    test('it starts with a #', () => {
        expect(validHairColour('#aaaaaa')).toBe(true);
        expect(validHairColour('xaaaaaa')).toBe(false);
    });
    test('it is a valid hex number', () => {
        expect(validHairColour('#aaaaah')).toBe(false);
        expect(validHairColour('#012345')).toBe(true);
    });
});

describe('validEyeColour', () => {
    test('it is present', () => {
        expect(validEyeColour(undefined)).toBe(false);
    });
    test('it is one of the allowed values', () => {
        expect(validEyeColour('hzl')).toBe(true);
        expect(validEyeColour('hzlhzl')).toBe(false);
        expect(validEyeColour('#aaaaaa')).toBe(false);
    });
});
