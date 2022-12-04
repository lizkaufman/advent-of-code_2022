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

//Part 2:

const solution_pt2 = countOverlappedPairs(data);
console.log({ solution_pt2 });

function countOverlappedPairs(data) {
  let count = 0;
  data.forEach((pair) => {
    if (hasOverlap(pair)) {
      count += 1;
    }
  });
  return count;
}

function hasOverlap(pair) {
  let result = false;

  const rangeBounds = pair.split(",");
  const [firstStart, firstFinish] = rangeBounds[0].split("-");
  const [secondStart, secondFinish] = rangeBounds[1].split("-");
  const firstRange = populateRange(firstStart, firstFinish);
  const secondRange = populateRange(secondStart, secondFinish);

  firstRange.forEach((num) => {
    if (secondRange.includes(num)) {
      result = true;
    }
  });

  return result;
}

function populateRange(start, end) {
  const range = [];
  for (let i = Number(start); i <= end; i++) {
    range.push(i);
  }
  return range;
}
