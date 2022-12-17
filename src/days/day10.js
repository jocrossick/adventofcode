const day10 = (input, part) => {
  const cycleGroupLength = 40;
  let cycleGroupStart = 20;
  if (part == 2) {
    cycleGroupStart = 0;
  }
  const signalArrays = [[1]];
  let xRegister = 1;
  let signalIndexes = [];

  //let cumulative = 1;
  const queue = [];
  let index = 1;

  let display = "";

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
    let spritePosition = (index - cycleGroupStart) % cycleGroupLength;
    if (spritePosition == 0) {
      spritePosition = cycleGroupLength;
    }
    //console.log("spritePosition, xRegister", spritePosition, xRegister);
    if (Math.abs(spritePosition - xRegister -1) < 2
    ) {
      display = display + "#";
      //console.log("Drawing", display);
    } else {
      display = display + ".";
      //console.log("Drawing", display);
    }
    if ((index - cycleGroupStart) % cycleGroupLength == 0) {
      signalIndexes.push(index);
      signalArrays.push([]);
      display = display + "\n";
    }

    //End cycle
    if (queue.length > 0) {
      const thisSignal = queue.pop();
      if (thisSignal != 0) {
        xRegister = xRegister+ thisSignal;
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
    return signalIndexes.map(
      (signalIndex, index) => signalIndex * lineVals[index]
    ).reduce((acc, curr) => acc + curr);
  }
  console.log(display)
  return display;
};

module.exports = { day10 };
