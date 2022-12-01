const { readFile } = require("../files/read");

const day1 = () => {

    const addedArray = [];
    readFile("day1").reduce((acc, curr) => {
        const thisInt = parseInt(curr);
        if (isNaN(thisInt)) {
            addedArray.push(acc);
            return 0;
        }
        return acc + thisInt;
    }, 0);

    console.log(addedArray);

    const sortedArray = (addedArray.sort((a, b) => a - b));
    
    return sortedArray[addedArray.length-1] + sortedArray[addedArray.length-2]+ sortedArray[addedArray.length-3];
}

module.exports = { day1 }