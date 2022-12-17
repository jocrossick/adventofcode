const day10 = (input, part) => {
  const cycleGroupLength = 40;
  const cycleGroupStart = 20;
  const signalArrays = [[1]];
  let signalIndexes = [];

  //let cumulative = 1;
  const queue = [];
  let index = 1;

  while (queue.length > 0 || index <= input.length + 1) {
    //Work out changes to apply at the end of the cycle
    if (input[index - 1]) {
      const [instructionType, value] = input[index - 1].split(" ");
      queue.unshift(0);
      if (instructionType == "addx") {
        queue.unshift(parseInt(value));
      }
    }

    //Apply cycle
    if ((index - cycleGroupStart) % cycleGroupLength == 0) {
      //      signalArrays.push(index * cumulative);
      signalIndexes.push(index);
      signalArrays.push([]);
    }

    //End cycle
    if (queue.length > 0) {
      const thisSignal = queue.pop();
      if (thisSignal != 0) {
        signalArrays[signalArrays.length - 1].push(thisSignal);
      }
    }

    index++;
  }
  //return signalArrays;

  if (part == 1) {
    let cumulative = 0;
    const lineVals = signalArrays.map((line) => {
      cumulative = line.reduce((acc, curr) => acc + curr) + cumulative;
      return cumulative;
    });
    if (signalIndexes.length == 0) {
      return lineVals[0];
    }
    return signalIndexes
      .map((signalIndex, index) => signalIndex * lineVals[index])
      .reduce((acc, curr) => acc + curr);
  }
  return "part2";
};

module.exports = { day10 };
