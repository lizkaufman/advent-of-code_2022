import data from "./input.js";

const stacks_pt1 = {
  1: ["T", "Z", "B"],
  2: ["N", "D", "T", "H", "V"],
  3: ["D", "M", "F", "B"],
  4: ["L", "Q", "V", "W", "G", "J", "T"],
  5: ["M", "Q", "F", "V", "P", "G", "D", "W"],
  6: ["S", "F", "H", "G", "Q", "Z", "V"],
  7: ["W", "C", "T", "L", "R", "N", "S", "Z"],
  8: ["M", "R", "N", "J", "D", "W", "H", "Z"],
  9: ["S", "D", "F", "L", "Q", "M"],
};

//Part 1:

moveCratesWithMovesList(data);
const solution_pt1 = getTopsOfstacks(stacks_pt1);
console.log({ solution_pt1 });

function getTopsOfstacks(finalstacks) {
  let result = "";
  for (const stack in finalstacks) {
    result += finalstacks[stack][0];
  }
  return result;
}

function moveCratesWithMovesList(data) {
  data.forEach((move) => {
    const [numberToMove, start, end] = extractMoveNumbers(move);
    makeMoveOneAtATime(numberToMove, start, end);
  });
}

function extractMoveNumbers(move) {
  const moveWords = move.split(" ");
  return [moveWords[1], moveWords[3], moveWords[5]];
}

function makeMoveOneAtATime(numberToMove, start, end) {
  for (let i = 0; i < numberToMove; i++) {
    const crate = stacks_pt1[start].shift();
    stacks_pt1[end].unshift(crate);
  }
}

//Part 2:

const stacks_pt2 = {
  1: ["T", "Z", "B"],
  2: ["N", "D", "T", "H", "V"],
  3: ["D", "M", "F", "B"],
  4: ["L", "Q", "V", "W", "G", "J", "T"],
  5: ["M", "Q", "F", "V", "P", "G", "D", "W"],
  6: ["S", "F", "H", "G", "Q", "Z", "V"],
  7: ["W", "C", "T", "L", "R", "N", "S", "Z"],
  8: ["M", "R", "N", "J", "D", "W", "H", "Z"],
  9: ["S", "D", "F", "L", "Q", "M"],
};

moveCratesWithMovesList9001(data);
const solution_pt2 = getTopsOfstacks(stacks_pt2);
console.log({ solution_pt2 });

function moveCratesWithMovesList9001(data) {
  data.forEach((move) => {
    const [numberToMove, start, end] = extractMoveNumbers(move);
    makeMoveAllAtOnce(numberToMove, start, end);
  });
}

function makeMoveAllAtOnce(numberToMove, start, end) {
  const cratesToMove = stacks_pt2[start].slice(0, numberToMove);
  for (let i = 0; i < numberToMove; i++) {
    stacks_pt2[start].shift();
  }
  stacks_pt2[end] = [...cratesToMove, ...stacks_pt2[end]];
}
