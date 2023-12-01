const { input } = require("./day6data");

const parseDataPart1 = (input) =>
  input
    .replaceAll(/ /g, "")
    .split(/\n\n/)
    .map((group) => [...new Set(group.replaceAll(/\n/g, ""))]);

const countAnswersPart1 = (answers) =>
  answers.reduce((acc, group) => acc + group.length, 0);

const parseDataPart2 = (input) =>
  input
    .replaceAll(/ /g, "")
    .split(/\n\n/)
    .map((group) => group.split(/\n/));

const matchingAnswersPerGroup = (group) =>
  group.reduce(
    (acc, entry) => acc.filter((letter) => entry.indexOf(letter) >= 0),
    group[0].split("")
  );

console.log('Total number of answers part 2', parseDataPart2(input).reduce((acc, group) => acc + matchingAnswersPerGroup(group).length, 0));

//6530
console.log(
  "Total number of answers part 1",
  countAnswersPart1(parseDataPart1(input))
);

module.exports = {
  parseDataPart1,
  parseDataPart2,
  countAnswersPart1,
  matchingAnswersPerGroup,
};
