const { readFile } = require("../read.js");

const day3 = () => {
  const rawInput = readFile("input.txt");
  console.log("Lines:", rawInput.length);


}

const today = () => day3();
module.exports = { today };
