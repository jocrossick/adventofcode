const { input } = require("./day8data");
const inputLines = input.split(/\n/);

const getMoveAndChange = (line) => {
  const [instruction, value] = line.split(" ");
  if (instruction == "nop") {
    return [1, 0];
  }

  if (instruction == "acc") {
    return [1, parseInt(value)];
  }

  if (instruction == "jmp") {
    return [parseInt(value), 0];
  }

  throw new Error("Did not receive nop/acc/jmp instruction");
};

const runInput = (input, replacementIndex, replacementInstruction) => {
  const indexRun = new Set();
  let indexVal = 0;
  let accumulator = 0;

  while (indexVal < input.length) {
    if (indexRun.has(indexVal)) {
        indexVal = input.length;
        break;
    }

    indexRun.add(indexVal);
    let [move, change] = getMoveAndChange(input[indexVal]);
    if (replacementIndex == indexVal) {
      [move, change] = getMoveAndChange(replacementInstruction);
    }
    indexVal = indexVal + move;
    accumulator = accumulator + change;
    if (indexVal > input.length -1) {
        console.log("****************Reached the end of the run!!!!");
    }
  }
  console.log("Returning from runInput", accumulator);
  return [accumulator, indexRun];
};

const tryDifferentRuns = (input) => {

  const indexRun = runInput(input)[1];

  indexRun.forEach(instructionIndex => {
      if (input[instructionIndex].substring(0, 3) == 'jmp') {
        runInput(input, instructionIndex, input[instructionIndex].replace('jmp', 'nop'));
      }
      if (input[instructionIndex].substring(0, 3) == 'nop') {
        runInput(input, instructionIndex, input[instructionIndex].replace('nop', 'jmp'));
    }
  })
};

console.log("Part 2 is running", tryDifferentRuns(inputLines));

//1317
//console.log("part 1 is", runInput(inputLines)[0]);

module.exports = { runInput, getMoveAndChange };
