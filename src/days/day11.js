const monkeyNumRegex = /(?<startText>Monkey )(?<monkeyNum>[0-9]*)/;
const startingItemsRegex =
  /(?<startText>  Starting items: )(?<itemsList>[0-9\,\ ]*)/;
const operationRegex =
  /(?<startText>  Operation: new = )(?<operation>old [+-\/\*] [a-z,A-Z,0-9]*)/;
const testRegex = /(?<startText>  Test: divisible by )(?<divisibleBy>[0-9]*)/;
const ifTrueRegex =
  /(?<startText>    If true: throw to monkey )(?<toMonkeyIfTrue>[0-9])*/;
const ifFalseRegex =
  /(?<startText>    If false: throw to monkey )(?<toMonkeyIfFalse>[0-9])*/;

const day11 = (input, maxRounds, part) => {
  const monkeys = input
    .reduce(
      (acc, curr) => {
        if (curr == "") {
          acc.push([]);
          return acc;
        }
        acc[acc.length - 1].push(curr);
        return acc;
      },
      [[]]
    )
    .reduce((acc, monkeyArr) => {
      acc[monkeyArr[0].match(monkeyNumRegex).groups.monkeyNum] =
        monkeyParser(monkeyArr);
      return acc;
    }, {});

  for (let i = 0; i < maxRounds; i++) {
    monkeyRound(monkeys);
  }
  const inspectionCounts = Object.keys(monkeys).map(monkey => monkeys[monkey].monkeyInspectionCount).sort((a, b) => b - a);
  return inspectionCounts[0]*inspectionCounts[1];
};

const monkeyParser = (monkeyArr) => {
  const ifTrue = monkeyArr[4].match(ifTrueRegex).groups.toMonkeyIfTrue;
  const ifFalse = monkeyArr[5].match(ifFalseRegex).groups.toMonkeyIfFalse;
  const operation = Function(
    "old",
    "return " + monkeyArr[2].match(operationRegex).groups.operation
  );
  const test = parseInt(monkeyArr[3].match(testRegex).groups.divisibleBy);

  return {
    monkeyNum: monkeyArr[0].match(monkeyNumRegex).groups.monkeyNum,
    items: monkeyArr[1]
      .match(startingItemsRegex)
      .groups.itemsList.split(", ")
      .map((item) => parseInt(item)),
    monkeyDecider: monkeyDecider(operation, test, ifTrue, ifFalse),
    monkeyInspectionCount: 0
  };
};

const monkeyDecider = (operationFunction, testVal, ifTrue, ifFalse) => {
  return (item) => {
    let worryLevel = Math.trunc(operationFunction(item) / 3);
    passesTest = Math.trunc(worryLevel / testVal) == worryLevel / testVal;
    const newMonkey = passesTest ? ifTrue : ifFalse;
    return [worryLevel, newMonkey];
  };
};

const monkeyRound = (monkeys) => {
  Object.keys(monkeys).forEach((key) => {
    monkeys[key].items.forEach((item) => {
      const [newItemWorryLevel, newMonkey] = monkeys[key].monkeyDecider(item);
      monkeys[newMonkey].items.push(newItemWorryLevel);
    });
    monkeys[key].monkeyInspectionCount = monkeys[key].monkeyInspectionCount + monkeys[key].items.length;
    monkeys[key].items = [];
  });
};

module.exports = { day11, monkeyParser };
