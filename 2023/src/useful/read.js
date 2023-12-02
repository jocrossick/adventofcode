const fs = require("fs");

const readFile = (dayName, fileName) => {

    return fs.readFileSync("src/today/" + dayName + "/" + fileName + ".txt", "utf-8").split("\n");

}

module.exports = { readFile }

