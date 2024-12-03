const { readFile } = require("../read.js");

const day3 = () => {
  const rawInput = readFile("input.txt");
  console.log("Lines:", rawInput.length);

  //const sum = rawInput.reduce((acc, line) => acc + day3part1processLine(line), 0);

  const sum2 = rawInput.reduce((acc, line) => {
    [toAdd, startOnDo] = day3part2processLine(line, acc[1]);
    acc[0] = acc[0] + toAdd;
    acc[1] = startOnDo;
    return acc;
  }, [0, true]);

  //console.log("Part 1: value is ", sum); //161289189
  console.log("Part 2: value is ", sum2); //85698778 too high 83595109
}

const day3part1processLine = (line) => {
  const regexp = /mul\([0-9]*,[0-9]*\)/g;
  const expressions = line.matchAll(regexp);

  const sum = expressions.reduce((acc, curr, index) => {
    console.log("At index ", index);
    const regexnums = /[0-9]{1,}/g;
    const expr = curr[0];
    const [val1, val2] = expr.matchAll(regexnums);
    console.log("Expression is", expr);
    console.log("Values are", val1[0], val2[0])

    return acc + parseInt(val1[0])*parseInt(val2[0]);

  }, 0);

  console.log("Sum for line:", sum);

  return sum;
}

const day3part2processLine = (line, startOnDo) => {
  console.log(line, startOnDo);
  const regexp = /mul\([0-9]*,[0-9]*\)/g;
  const regexDo = /do\(\)/g;
  const regexDont = /don\'t\(\)/g;
  const expressions = line.matchAll(regexp);
  const dos = [...line.matchAll(regexDo)];
  const donts = [...line.matchAll(regexDont)];

  const doIndexes = dos.map((thisDo) => thisDo.index);
  const dontIndexes = donts.map((thisDont) => thisDont.index);

  const endOnDo = doIndexes[doIndexes.length-1] > dontIndexes[dontIndexes.length-1];

  console.log("doIndexes", doIndexes);
  console.log("dontIndexes", dontIndexes);

  const sum = expressions.reduce((acc, curr, index) => {
    console.log(`*********At index ${index}********`);
    const regexnums = /[0-9]{1,}/g;
    const expr = curr[0];
    const exprIndex = curr.index;
    const [val1, val2] = expr.matchAll(regexnums);

    console.log("Expression is", expr);
    console.log("Expression index is", exprIndex);
    console.log("Values are", val1[0], val2[0]);

    const dosIndex = doIndexes.reduce((acc, curr) => curr < exprIndex ? curr : acc, 0);
    const dontsIndex = dontIndexes.reduce((acc, curr) => curr < exprIndex ? curr : acc, 0);

    console.log("Do and dont index", dosIndex, dontsIndex);

    if (dosIndex > dontsIndex || (startOnDo && dontsIndex == 0)) {
      console.log("Adding expression");
      return acc + parseInt(val1[0])*parseInt(val2[0]);
    }
    console.log("NOT Adding expression");
    return acc;

  }, 0);

  console.log("Sum for line:", sum);

  return [sum, endOnDo];
}

const today = () => day3();
module.exports = { today };
