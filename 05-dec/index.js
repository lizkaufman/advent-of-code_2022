import data from "./input.js";

const stacks = {
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

const testData = [
  "move 1 from 7 to 4",
  "move 1 from 6 to 2",
  "move 5 from 9 to 4",
  "move 2 from 2 to 8",
  "move 2 from 2 to 6",
  "move 3 from 3 to 7",
  "move 3 from 7 to 1",
  "move 1 from 9 to 4",
  "move 4 from 7 to 3",
  "move 5 from 1 to 8",
  "move 1 from 1 to 2",
  "move 1 from 4 to 9",
  "move 4 from 5 to 6",
  "move 1 from 5 to 8",
  "move 3 from 2 to 4",
];

moveCratesWithMovesList(data);
const solution_pt1 = getTopsOfStacks(stacks);
console.log({ solution_pt1 });

function getTopsOfStacks(finalStacks) {
  let result = "";
  for (const stack in finalStacks) {
    result += finalStacks[stack][0];
  }
  return result;
}

function moveCratesWithMovesList(data) {
  data.forEach((move) => {
    const [numberToMove, start, end] = extractMoveNumbers(move);
    makeMove(numberToMove, start, end);
  });
}

function extractMoveNumbers(move) {
  const moveWords = move.split(" ");
  return [moveWords[1], moveWords[3], moveWords[5]];
}

function makeMove(numberToMove, start, end) {
  for (let i = 0; i < numberToMove; i++) {
    const crate = stacks[start].shift();
    stacks[end].unshift(crate);
  }
}
