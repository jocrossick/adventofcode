const fs = require("fs");

const readFile = (dayName) => {

    return fs.readFileSync("rosie/files/" + dayName + ".txt", "utf-8").split("\n");

}

module.exports = { readFile }