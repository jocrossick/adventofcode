const day10 = (input, part) => {
  const cycleGroupLength = 40;
  const cycleGroupStart = 20;
  const signalStrengths = [];

  let cumulative = 1;
  const queue = [];
  let index = 1;

  while (queue.length > 0 || index <= input.length + 1) {
    //Work out changes to apply at the end of the cycle
    if (input[index - 1]) {
      const [instructionType, value] = input[index-1].split(" ");
      queue.unshift(0);
      if (instructionType == "addx") {
        queue.unshift(parseInt(value));
      }
    }

    //Apply cycle
    if ((index - cycleGroupStart) % cycleGroupLength == 0) {
      signalStrengths.push(index * cumulative);
    }

    //End cycle
    if (queue.length > 0) {
      cumulative = cumulative + queue.pop();
    }

    index++;
  }
  //return cumulative;

  return signalStrengths.reduce((acc, curr) => acc + curr);
};

module.exports = { day10 };
