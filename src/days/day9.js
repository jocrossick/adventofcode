const day9 = (input, part) => {
  let h = [0, 0];
  let t = [0, 0];
  let hist_h = [[0, 0]];
  let hist_t = [[0, 0]];

  input.forEach((move) => {
    const [direction, repeat] = move.split(" ");
    for (let i = 0; i < parseInt(repeat); i++) {
      switch (direction) {
        case "R":
          moveRight(h, t);
          break;
        case "L":
          moveLeft(h, t);
          break;
        case "U":
          moveUp(h, t);
          break;
        case "D":
          moveDown(h, t);
          break;
        default:
          console.log("Direction was not recognised", direction);
          break;
      }
      hist_t.push([...t]);
      hist_h.push([...h]);
    }
});
  return hist_t.sort().filter((entry, index, arr) => index == 0 || entry[0] != arr[index-1][0] || entry[1] != arr[index-1][1]).length;
};

const moveRight = (h, t) => {
  if ((h[0] == t[0] + 1)) {
    t[0] = t[0] + 1;
    t[1] = h[1];
  }
  h[0] = h[0] + 1;
};
const moveLeft = (h, t) => {
  if ((h[0] == t[0] - 1)) {
    t[0] = t[0] - 1;
    t[1] = h[1];
  }
  h[0] = h[0] - 1;
};
const moveUp = (h, t) => {
  if ((h[1] == t[1] + 1)) {
    t[1] = t[1] + 1;
    t[0] = h[0];
  }
  h[1] = h[1] + 1;
};
const moveDown = (h, t) => {
  if ((h[1] == t[1] - 1)) {
    t[1] = t[1] - 1;
    t[0] = h[0];
  }
  h[1] = h[1] - 1;
};

module.exports = { day9 };

//[[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [3, 4], [2, 4], [1, 4], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [5, 2], [4, 2], [3, 2], [2, 2], [1, 2], [0, 2], [1, 2]], 
//[[0, 0], [0, 0], [1, 0], [2, 0], [3, 0], [3, 0], [4, 1], [4, 2], [4, 3], [4, 3], [3, 4], [2, 4], [2, 4], [2, 4], [2, 4], [3, 3], [4, 3], [4, 3], [4, 3], [4, 3], [3, 2], [2, 2], [1, 2], [1, 2]]]
// [0, 0], [0, 0], [1, 0], [2, 0], [3, 0], [3, 0], [4, 1], [4, 2], [4, 3], [4, 3], [3, 4], [2, 4], [2, 4], [2, 4], [2, 4], [3, 3], [4, 3], [4, 3], [4, 3], [4, 3], [3, 2], [2, 2], [1, 2], [1, 2]}