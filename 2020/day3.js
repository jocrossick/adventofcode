const { landscape, testLandscape } = require("./day3data");

const parseLandscape = (landscape) => {
    return landscape.split(/\r?\n/);
}

const calculateTreesHit = (landscape, rightshift, downshift) => {
    const parsedLandscape = parseLandscape(landscape);
    const mod = parsedLandscape[0].length;

    let treesHit = 0;
    for (i = 0; i < parsedLandscape.length; i = i+downshift) {
        if (parsedLandscape[i].charAt(((i/downshift)*rightshift)%mod) == '#') {
            treesHit++;
        }
    }

    return treesHit;
}

const treesHit = (rightshift, downshift) => landscape.split(/\r?\n/).reduce((acc, line, i) => Number.isInteger(i/downshift) && line.charAt(((i/downshift)*rightshift)%(line.length)) == '#' ? (acc + 1) : acc, 0);

const r1d1 = calculateTreesHit(landscape, 1, 1);
const r3d1 = calculateTreesHit(landscape, 3, 1);
const r5d1 = calculateTreesHit(landscape, 5, 1);
const r7d1 = calculateTreesHit(landscape, 7, 1);
const r1d2 = calculateTreesHit(landscape, 1, 2);

console.log("The numbers are", r1d1, r3d1, r5d1, r7d1, r1d2);
console.log("The product is", r1d1*r3d1*r5d1*r7d1*r1d2);

console.log('The product using refactored code is', treesHit(1, 1)*treesHit(3, 1)*treesHit(5, 1)*treesHit(7, 1)*treesHit(1, 2));