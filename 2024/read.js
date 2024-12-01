const fs = require("fs");

const readFile = (isTest) => {

    if (isTest) {
        return fs.readFileSync("today/input/test.txt", "utf-8").split("\n");
    }

    return fs.readFileSync("today/input/input.txt", "utf-8").split("\n");

}

module.exports = { readFile }

