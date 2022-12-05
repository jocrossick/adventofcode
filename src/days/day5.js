const day5 = (input, part) => {
  let stack = getStack(input);

  const instructions = input.slice(input.indexOf("") + 1).map((line) => {
    const words = line.split(" ");
    return { 
        moveQty: parseInt(words[1]), 
        from: parseInt(words[3]), 
        to: parseInt(words[5])
    };
  });

  instructions.forEach(instruction => part == 1 ? applyMovePart1(instruction, stack) : applyMovePart2(instruction, stack));

  return stack.reduce((acc, curr) => acc+curr.pop(), '');

};

const getStack = (input) => {
  const stackWidth = (input[0].length + 1) / 4;
  const stack = Array(stackWidth);
  for (let i = 0; i < stackWidth; i++) {
    stack[i] = [];
  }

  const inputStackPart = input.slice(0, input.indexOf("") - 1);

  inputStackPart.forEach((line) =>
    line.split("").forEach((char, index) => {
      if ((index - 1) % 4 == 0 && char != " ") {
        stack[(index - 1) / 4].unshift(char);
      }
    })
  );
  return stack;
};

const applyMovePart1 = ({ moveQty, from, to}, stack) => {
    for (let i = 1; i <= moveQty; i++) {
        stack[to-1].push(stack[from-1].pop())
    }
}

const applyMovePart2 = ({ moveQty, from, to}, stack) => {
    for (let i = 1; i <= moveQty; i++) {
        stack[to-1].push(stack[from-1].pop())
    }
}

module.exports = { day5 };
