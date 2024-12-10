const { readFile } = require("../read.js");

const day7 = () => {
  const rawInput = readFile("input.txt");
  const opCount = 3; //2 operators for part 1, 3 operators for part 2.

  const processedInput = [];
  let minLineLength = Number.MAX_VALUE;
  let maxLineLength = 0;

  rawInput.forEach(row => {
    const [testVal, inputsString]  = row.split(": ");
    inputs = inputsString.split(' ');
    if (inputs.length > maxLineLength) {
      maxLineLength = inputs.length;
    }
    if (inputs.length < minLineLength) {
      minLineLength = inputs.length;
    }
    processedInput.push({
      testVal: parseInt(testVal),
      inputs: inputs.map(val => parseInt(val)),
      possibleSums: []
    })
  });

  console.log("processedInput", processedInput);
  console.log("Min and max line lengths", minLineLength, maxLineLength);

  const operatorCombosByLineLength = {};
  for (let i= minLineLength; i <= maxLineLength; i++) {
    const operatorCombos = [];
    const comboCharLength = Math.pow(opCount, i-1);

    for (let j=0; j<comboCharLength; j++) {
      const combo = j.toString(opCount);
      let comboArr = [];

      if (combo.length < i-1) {
        comboArr = Array(i-combo.length-1).fill(0);
      }
      comboArr.push(...combo.split('').map(entry => parseInt(entry)));
      operatorCombos.push(comboArr);
    }
    operatorCombosByLineLength[i] = {};
    operatorCombosByLineLength[i].combos = operatorCombos;
    console.log("Operator combos", operatorCombos);
  }

  processedInput.forEach((line, lineIndex) => {
    const combos = operatorCombosByLineLength[line.inputs.length].combos;

    console.log("Line is", lineIndex, line.inputs);
    console.log("Oprators are", combos);

    combos.forEach(combo => {
      const sum = combo.reduce((acc, operator, index) => {
        if (operator == 0) {
          return acc*line.inputs[index+1];
        }
        else if (operator == 1) {
          return acc+line.inputs[index+1];
        }
        else if (operator == 2) {
          return parseInt(acc.toString().concat(line.inputs[index+1]));

        }
        console.error("Unrecognised operator", operator);
      }, line.inputs[0]);

      line.possibleSums.push(sum);
    });
    console.log("Line result is", line.possibleSums);
  });

  const answer = processedInput.reduce((acc, line) => line.possibleSums.filter(sum => sum == line.testVal).length > 0 ? acc + line.testVal : acc, 0);

  console.log("Answer is", answer); //part 1: 66343330034722
}

const today = () => day7();
module.exports = { today };
