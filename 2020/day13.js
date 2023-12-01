const leaveAt = 1000067;
const busInput = `17,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,439,x,29,x,x,x,x,x,x,x,x,x,x,13,x,x,x,x,x,x,x,x,x,23,x,x,x,x,x,x,x,787,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,19`;
const testInput = `7,13,x,x,59,x,31,19`;
const testInput2 = `17,x,13,19`;

const buses = busInput
  .split(",")
  .filter((entry) => entry != "x")
  .map((entry) => parseInt(entry));

const minutesWait = (leaveAt, busId) =>
  (parseInt(leaveAt / busId) + 1) * busId - leaveAt;

const leavingArray = buses
  .map((bus) => {
    return { bus, wait: minutesWait(leaveAt, bus) };
  })
  .sort((a, b) => a.wait - b.wait);

console.log("Part 1 is", leavingArray[0].bus * leavingArray[0].wait); //205

const busIndexes = (input) =>
  input
    .split(",")
    .map((entry, index) => {
      return { number: parseInt(entry), index };
    })
    .filter((entry) => !isNaN(entry.number));

const findTimeStamp = (input) => {
  input.sort((a, b) => b.number - a.number);
  const incrementByArr = [1];
  input.forEach((entry, index) => incrementByArr.push(incrementByArr[index]*entry.number));

  let incrementBy = incrementByArr[0];
  const noOfBuses = input.length;
  let hasAnswer = false;
  let timestamp = 0;

  while (!hasAnswer) {
    timestamp = timestamp + incrementBy;
    for (let i = 0; i < noOfBuses; i++) {
      hasAnswer = Number.isInteger(
        (timestamp + input[i].index) / input[i].number
      );
      incrementBy = incrementByArr[i];
      if (!hasAnswer) {
        break;
      }
    }
  }
  return timestamp;
};

console.log("Part 2 is", findTimeStamp(busIndexes(busInput))); //803025030761664
