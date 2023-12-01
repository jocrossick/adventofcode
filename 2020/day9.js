const { input } = require("./day9data");
const inputNumbers = input.split(/\n/).map(entry => parseInt(entry));

const findFirstNonSum = (inputNumbers) => {
    let firstNonSum = 0;
    for (let i = 25; i < inputNumbers.length; i++) {
        let hasSum = false;
        for (let j = i - 25; j < i - 1; j++ ) {
            for (let k = j + 1; k < i; k++) {
                if (inputNumbers[i] == inputNumbers[j] + inputNumbers[k]) {
                    hasSum = true;
                    break;
                }
            }
            if (hasSum) {
                break;
            }
        }
        if (!hasSum) {
            firstNonSum = inputNumbers[i];
            break;
        }
    }
    return firstNonSum;
}

const findContiguousSum = (input, targetSum) => {

    let i = 0;
    let j = 0;
    let hasAnswer = false;
    for(i = 0; i < input.length; i++) {
        let contiguousSum = input[i];
        j = i+1;
        while (contiguousSum < targetSum) {
            contiguousSum = contiguousSum + input[j];
            if (contiguousSum == targetSum) {
                hasAnswer = true;
                break;
            }
            j++;
        }
        if (hasAnswer) {
            break;
        }
    }

    const range = input.slice(i, j+1);
    range.sort((a, b) => a-b);
    return range[0] + range[range.length - 1];
}

//177777905
console.log("Running part 1", findFirstNonSum(inputNumbers));

//23463012
console.log("running part 2", findContiguousSum(inputNumbers, 177777905));