const fs = require("fs");

const readFile = (filename) => {

    const lines = fs.readFileSync("today/input/" + filename, "utf-8").split("\n")
    lines.pop();
    return lines;

}

module.exports = { readFile }

