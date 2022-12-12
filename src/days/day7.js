const day7 = (input, part) => {
  const contents = getStructure(input);
  let allHaveSizes = false;
  let breakCount = 0;

  while (!allHaveSizes && breakCount < 20) {
    allHaveSizes = true;
    breakCount++;
    Object.keys(contents).forEach((key) => {
      if (!contents[key].size) {
        allHaveSizes = false;
        const fileSizes = contents[key].childFiles.reduce(
          (acc, currFile) => acc + contents[currFile].size,
          0
        );
        const dirSizes = contents[key].childDirs.reduce(
          (acc, currDir) =>
            contents[currDir].size ? acc + contents[currDir].size : NaN,
          0
        );
        if (!isNaN(dirSizes)) {
          contents[key].size = fileSizes + dirSizes;
        }
      }
    });
  }
  console.log(
    "File structure contents is ",
    JSON.stringify(contents, null, "\t")
  );

  if (part == 1) {
    const filtered = Object.keys(contents).filter(
      (key) => contents[key].size <= 100000 && contents[key].type == "dir"
    );

    return filtered.reduce((acc, key) => acc + contents[key].size, 0);
  }

  const totalAvailable = 70000000;
  const requiredSpace = 30000000;
  const totalUsed = contents["-/"].size;
  const minSize = totalUsed - totalAvailable + requiredSpace;
  console.log("Min size is", minSize);

  return Object.keys(contents).reduce(
    (acc, curr) =>
    contents[curr].type == "dir" && contents[curr].size >= minSize ? Math.min(contents[curr].size, acc) : acc,
    totalUsed
  );
};

const getStructure = (input) => {
  /*
  contents: {
    name: {
      type: [file|dir],
      size: [undefined|number],
      childFiles: [],
      childDirs: [],
      parentDir: [undefined|name]
    }
  }
  */
  let contents = {};

  let thisDirName = undefined;
  let nextDirName = undefined;
  const currPath = [];

  input.forEach((element) => {
    thisDirName = slugifyPath(currPath);
    if (element.substring(0, 5) == "$ cd ") {
      nextFolder = element.substring(5);
      if (nextFolder == "..") {
        currPath.pop();
      } else {
        currPath.push(nextFolder);
      }
      nextDirName = slugifyPath(currPath);

      if (!contents[nextDirName]) {
        contents[nextDirName] = {
          type: "dir",
          size: undefined,
          childFiles: [],
          childDirs: [],
          parentDir: thisDirName,
        };
      }
    }

    if (element.substring(0, 2) != "$ ") {
      if (element.substring(0, 4) == "dir ") {
        contents[thisDirName].childDirs.push(
          slugifyPath(currPath) + "-" + element.substring(4)
        );
      } else {
        const [size, name] = element.split(" ");
        contents[slugifyPath(currPath) + "-" + name] = {
          size: parseInt(size),
          type: "file",
          parentDir: thisDirName,
        };
        try {
          contents[thisDirName].childFiles.push(
            slugifyPath(currPath) + "-" + name
          );
        } catch (err) {
          console.log(
            `Error ${err} with Dir ${thisDirName} and contents`,
            contents[thisDirName]
          );
        }
      }
    }
  });

  return contents;
};

const slugifyPath = (arr) => arr.reduce((acc, curr) => acc + "-" + curr, "");

module.exports = { day7, getStructure };
