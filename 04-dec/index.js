import data from "./input.js";

//Part 1:

const solution_pt1 = countFullyContainedRanges(data);
console.log({ solution_pt1 });

function countFullyContainedRanges(data) {
  let count = 0;
  data.forEach((pair) => {
    if (hasFullyContainedRange(pair)) {
      count += 1;
    }
  });
  return count;
}

function hasFullyContainedRange(pair) {
  const rangeBounds = pair.split(",");
  const [firstStart, firstFinish] = rangeBounds[0].split("-");
  const [secondStart, secondFinish] = rangeBounds[1].split("-");

  return (
    (firstStart >= secondStart && firstFinish <= secondFinish) ||
    (secondStart >= firstStart && secondFinish <= firstFinish)
  );
}
