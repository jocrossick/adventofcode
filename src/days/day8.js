const day8 = (input, part) => {
  const allTrees = input.map((row) =>
    row.split("").map((tree) => parseInt(tree))
  );

  if (part == 1) {
    const visibleTrees = allTrees.map((treeRow, rowIndex) =>
      treeRow.filter((tree, columnIndex) =>
        isVisible(allTrees, rowIndex, columnIndex)
      )
    );
    return visibleTrees.flat().length;
  }

  const scenicScore = allTrees.map((treeRow, rowIndex) =>
    treeRow.map((tree, columnIndex) =>
      calculateScenicScore(allTrees, rowIndex, columnIndex)
    )
  );
  console.log("scenic score is", scenicScore);
  return scenicScore
    .map((row) => row.reduce((acc, treeScore) => Math.max(acc, treeScore), 0))
    .reduce((acc, maxRow) => Math.max(acc, maxRow), 0);
};

const calculateScenicScore = (trees, row, column) => {
  if (
    row == 0 ||
    column == 0 ||
    trees[0].length - 1 == row ||
    trees.length - 1 == column
  ) {
    return 0;
  }
  const treeHeight = trees[row][column];
  const arrLeft = trees[row].slice(0, column).reverse();
  const arrRight = trees[row].slice(column + 1, trees[row].length);
  const arrTop = [];
  for (let i = 0; i < row; i++) {
    arrTop.push(trees[i][column]);
  }
  arrTop.reverse();
  const arrBottom = [];
  for (let i = row + 1; i < trees.length; i++) {
    arrBottom.push(trees[i][column]);
  }

  let countLeft = 0;
  while (arrLeft[countLeft] < treeHeight && countLeft < arrLeft.length) {
    countLeft++;
  }
  if (arrLeft[countLeft] >= treeHeight) {
    countLeft++;
  }
  let countRight = 0;
  while (arrRight[countRight] < treeHeight && countRight < arrRight.length) {
    countRight++;
  }
  if (arrRight[countRight] >= treeHeight) {
    countRight++;
  }
  let countTop = 0;
  while (arrTop[countTop] < treeHeight && countTop < arrTop.length) {
    countTop++;
  }
  if (arrTop[countTop] >= treeHeight) {
    countTop++;
  }
  let countBottom = 0;
  while (
    arrBottom[countBottom] < treeHeight &&
    countBottom < arrBottom.length
  ) {
    countBottom++;
  }
  if (arrBottom[countBottom] >= treeHeight) {
    countBottom++;
  }
  console.log(
    `Position ${row}, ${column} has visibility ${countLeft}, ${countTop}, ${countRight}, ${countBottom}`
  );
  return countLeft * countRight * countTop * countBottom;
};

const isVisible = (trees, row, column) => {
  if (
    row == 0 ||
    column == 0 ||
    trees[0].length - 1 == row ||
    trees.length - 1 == column
  ) {
    return true;
  }
  let highestLeft = 0;
  let highestRight = 0;
  let highestTop = 0;
  let highestBottom = 0;

  highestLeft = Math.max(...trees[row].slice(0, column));
  if (highestLeft < trees[row][column]) {
    return true;
  }

  highestRight = Math.max(...trees[row].slice(column + 1, trees[row].length));
  if (highestRight < trees[row][column]) {
    return true;
  }

  for (let i = 0; i < row; i++) {
    highestTop = Math.max(highestTop, trees[i][column]);
  }
  if (highestTop < trees[row][column]) {
    return true;
  }

  for (let i = row + 1; i < trees.length; i++) {
    highestBottom = Math.max(highestBottom, trees[i][column]);
  }
  if (highestBottom < trees[row][column]) {
    return true;
  }
  return false;
};

module.exports = { day8 };
