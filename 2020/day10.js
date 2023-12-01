const { input } = require("./day10data");
const inputNumbers = input.split(/\n/).map(entry => parseInt(entry)).sort((a,b) => a-b);
//console.log("input numbers are", inputNumbers);

const oneTwoAndThreeGaps = input => input.reduce((acc, val, ind) => {
    let diff = val-inputNumbers[ind-1];
    if (ind == 0) {
        diff = val;
    }
    acc[diff-1] = acc[diff-1]+1;
    return acc;
}, [0,0,1]);

const part1Results = (input) => {
    const [one, two, three] = oneTwoAndThreeGaps(input);
    return one*three
}

//3034
console.log("part 1 result is", part1Results(inputNumbers));
