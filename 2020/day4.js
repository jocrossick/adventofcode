const { passportData } = require("./day4data");

const parseData = (input) => {
  return input
    .split(/\n\n/)
    .map((passports) => passports.split(/\ |\n/))
    .map((passport) =>
      passport.reduce((acc, ppData) => {
        return { ...acc, [ppData.split(":")[0]]: ppData.split(":")[1] };
      }, {})
    );
};

const findValidPassports = (passports) =>
  passports.filter(
    (passport) =>
      validBirthYear(passport.byr) &&
      validIssueYear(passport.iyr) &&
      validExpirationYear(passport.eyr) &&
      validHeight(passport.hgt) &&
      validPid(passport.pid) &&
      validHairColour(passport.hcl) &&
      validEyeColour(passport.ecl)
    // cid (Country ID) - ignored, missing or not.
  );

const validBirthYear = (byr) => {
  // byr (Birth Year) - four digits; at least 1920 and at most 2002.
  if (!byr) {
    return false;
  }
  return (
    byr &&
    !isNaN(parseInt(byr)) &&
    parseInt(byr) >= 1920 &&
    parseInt(byr) <= 2002
  );
};

const validIssueYear = (iyr) => {
  // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
  if (!iyr) {
    return false;
  }
  return (
    iyr &&
    !isNaN(parseInt(iyr)) &&
    parseInt(iyr) >= 2010 &&
    parseInt(iyr) <= 2020
  );
};

const validExpirationYear = (eyr) => {
  // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
  if (!eyr) {
    return false;
  }
  return (
    eyr &&
    !isNaN(parseInt(eyr)) &&
    parseInt(eyr) >= 2020 &&
    parseInt(eyr) <= 2030
  );
};

const validHeight = (height) => {
  // hgt (Height) - a number followed by either cm or in:
  // If cm, the number must be at least 150 and at most 193.
  // If in, the number must be at least 59 and at most 76.
  if (!height) {
    return false;
  }
  if (height.includes("in")) {
    const heightVal = parseInt(height.split("in")[0]);
    return !isNaN(heightVal) && heightVal >= 59 && heightVal <= 76;
  }
  if (height.includes("cm")) {
    const heightVal = parseInt(height.split("cm")[0]);
    return !isNaN(heightVal) && heightVal >= 150 && heightVal <= 193;
  }
  return false;
};

const validPid = (pid) => {
  // pid (Passport ID) - a nine-digit number, including leading zeroes.
  if (!pid) {
    return false;
  }
  return !isNaN(parseInt(pid)) && pid.length == 9;
};

const validHairColour = (hcl) => {
  // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
  if (!hcl) {
      return false;
  }
  return (
    hcl.length == 7 &&
    hcl.charAt(0) == "#" &&
    /^([a-f0-9]{6})$/.test(hcl.slice(-6))
  );
};

const validEyeColour = (ecl) => {
    // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
    if (!ecl) {
        return false;
    }  
  return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(ecl);
};

module.exports = {
  parseData,
  findValidPassports,
  validBirthYear,
  validIssueYear,
  validExpirationYear,
  validHeight,
  validPid,
  validHairColour,
  validEyeColour,
};

console.log(
  "Number of valid passports is",
  findValidPassports(parseData(passportData)).length
);
