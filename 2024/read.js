const fs = require("fs");

const readFile = (filename) => {

    return fs.readFileSync("today/input/" + filename, "utf-8").split("\n").filter(line => line);

}

module.exports = { readFile }

