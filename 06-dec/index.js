import data from "./input.js";

//Part 1:

const testString = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";

const solution_pt1 = countCharsToUniqueSet(data, 4);
console.log({ solution_pt1 });

function countCharsToUniqueSet(data, groupSize) {
  let result;
  data.split("").every((_, i) => {
    const charGroup = createCharGroup(groupSize, i, data);
    const isUnique = hasUniqueChars(charGroup);
    if (isUnique) {
      result = i + groupSize;
      return false;
    }
    return true;
  });
  return result;
}

function hasUniqueChars(chars) {
  let result = true;
  chars.forEach((char, i) => {
    if ([...chars.slice(0, i), ...chars.slice(i + 1)].includes(char)) {
      result = false;
    }
  });
  return result;
}

function createCharGroup(groupSize, startingIndex, data) {
  return [...data.slice(startingIndex, startingIndex + groupSize)];
}
