const {
  part1TestInputFail,
  part1TestInputPass,
  part2TestInputFail,
  part2TestInputPass,
  inputString,
} = require("./day2data");

const parseInput = (inputString) => {
  return inputString.split(/\r?\n/).map((s) => {
    return {
      letterRequired: s.slice(s.indexOf(" ") + 1, s.indexOf(":")),
      firstCondition: parseInt(s.slice(0, s.indexOf("-"))),
      secondCondition: parseInt(s.slice(s.indexOf("-") + 1, s.indexOf(" "))),
      password: s.slice(s.indexOf(": ") + 2),
    };
  });
};

const addDerivedInfo = (input) => {
  return input.map((p) => {
    return {
      ...p,
      countLetterMatches: p.password
        .split("")
        .filter((c) => c == p.letterRequired).length,
      matchesAtFirstIndex:
        p.password.charAt(p.firstCondition - 1) == p.letterRequired,
      matchesAtSecondIndex:
        p.password.charAt(p.secondCondition - 1) == p.letterRequired,
    };
  });
};

const validatePasswordPart1 = (input, message) => {
  const validPasswords = input.filter(
    (p) =>
      p.countLetterMatches >= p.firstCondition &&
      p.countLetterMatches <= p.secondCondition
  );
  console.log(message, validPasswords.length);
};

const validatePasswordPart2 = (input, message) => {
  const validPasswords = input.filter(
    (p) =>
      p.matchesAtFirstIndex != p.matchesAtSecondIndex &&
      (p.matchesAtFirstIndex || p.matchesAtSecondIndex)
  );
  console.log(message, validPasswords.length);
};

validatePasswordPart1(
  addDerivedInfo(parseInput(part1TestInputFail)),
  `Test failure conditions for part 1 expect 0 to be valid, actual number valid is`
);
validatePasswordPart1(
  addDerivedInfo(parseInput(part1TestInputPass)),
  `Test success conditions for part 1 expect 2 to be valid, actual number valid is`
);
validatePasswordPart1(
  addDerivedInfo(parseInput(inputString)),
  "Part 1, the number of valid passwords is"
);

validatePasswordPart2(
  addDerivedInfo(parseInput(part2TestInputFail)),
  `Test failure conditions for part 2 expect 0 to be valid, actual number valid is`
);
validatePasswordPart2(
  addDerivedInfo(parseInput(part2TestInputPass)),
  `Test success conditions for part 2 expect 2 to be valid, actual number valid is`
);
validatePasswordPart2(
  addDerivedInfo(parseInput(inputString)),
  "Part 2, the number of valid passwords is"
);
