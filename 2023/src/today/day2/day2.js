const { readFile } = require("../../useful/read");

//12 red cubes, 13 green cubes, and 14 blue cubes
const elfConditions = { red: 12, green: 13, blue: 14 }

const parseInput = (filename) => {

  const inputLines = readFile('day2', filename);
  //Remove the last empty line from the file
  inputLines.pop();

  return inputLines.map(line => {
    // const exampleStructure = {
    //   game: 3,
    //   sets: [
    //     {
    //       red: 3,
    //       blue: 2
    //     },
    //     {
    //       red: 6,
    //       green: 1
    //     }
    //   ]
    // }
    const [game, description] = line.split(': ');
    const setsStringArr = description.split('; ');
    const sets = setsStringArr.map(setString => {
      const pickStringArr = setString.split(', ');
      const picks = pickStringArr.reduce((pickJson, pickString) => {
        const [qty, colour] = pickString.split(' ');
        pickJson[colour] = qty;
        return pickJson;
      }, {});
      return picks;
    })
    return { game: game.split(' ')[1], sets };
  });
}

const testParseInput = () => {
  const testResult = parseInput('test1');
  console.assert(testResult[2].game == '3', "Did not have the right value in game" );
  console.assert(testResult[2].sets[1].red == '4', "Did not have the right value in set 1 red" );
}
testParseInput();

const part1 = () => {
  const allGames = parseInput('part1');
  const elfConditionsKeys = Object.keys(elfConditions);
  const possibleGames = allGames.filter(game => {
    const possibleSets = game.sets.filter(set => {
      let isPossible = true;
      elfConditionsKeys.forEach(key => {
        if (set[key] > elfConditions[key]) {
          isPossible = false;
        }
      });
      return isPossible;
    })
    return possibleSets.length == game.sets.length;
  })
  console.log("Solution is ", possibleGames.reduce((acc, game) => acc + parseInt(game.game), 0 ));
}

//78669
const part2 = () => {
  const allGames = parseInput('part1');
  allGames.forEach(game => {
    game.minimumSet = {};
    game.sets.forEach(pick => {
      for (const [colour, value] of Object.entries(pick)) {
        if (game.minimumSet[colour] == undefined) {
          game.minimumSet[colour] = 0;
        }
        game.minimumSet[colour] = Math.max(game.minimumSet[colour],parseInt(value));
      }})
  });
  const score = allGames.reduce((acc, game) => {
    const power = Object.values(game.minimumSet).reduce((acc2, val) => acc2* parseInt(val), 1)
    return acc + power;
  }, 0);
  console.log("Solution is ", score);
}

//Part 1: 2283
const day2 = () => {
  part2();
}

module.exports = { day2 }
