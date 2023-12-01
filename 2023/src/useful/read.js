const fs = require("fs");

const readFile = (dayName) => {

    return fs.readFileSync("src/input/" + dayName + ".txt", "utf-8").split("\n");

}

module.exports = { readFile }

