/*
⚠ NOTE: I didn't finish this puzzle, but I'm committing what I've done so far.

Known bug: I'm counting trees more than once.
*/

import data from "./input.js";

const testData = ["30373", "25512", "65332", "33549", "35390"];

const rows = testData;
const columns = transformRowsToColumns(testData);
// const rows = data;
// const columns = transformRowsToColumns(data);
console.log({ rows, columns });

const solution_pt1 = totalVisibleTrees(rows, columns);
console.log({ solution_pt1 });

function totalVisibleTrees(rows, columns) {
  let count = 0;
  count += rows.reduce((acc, cur) => acc + countVisibleTrees(cur), 0);
  count += columns.reduce((acc, cur) => acc + countVisibleTrees(cur), 0);
  return count;
}

function countVisibleTrees(trees) {
  let count = 1;
  let currentHighest = 0;
  //left to right
  for (let i = 0; i < trees.length; i++) {
    if (trees[i] > currentHighest) {
      currentHighest = trees[i];
      if (i === 0) {
        continue;
      }
      count++;
    }
  }
  //right to left
  currentHighest = 0;
  for (let i = trees.length - 1; i >= 0; i--) {
    if (i === trees.length - 1 && trees[i] === "0") {
      count++;
      continue;
    }
    if (trees[i] > currentHighest) {
      currentHighest = trees[i];
      count++;
    }
  }
  console.log({ trees, count });
  return count;
}

function transformRowsToColumns(data) {
  return data.reduce((acc, cur, i) => {
    const heights = cur.split("");
    if (i === 0) {
      //first row sets out columns
      heights.forEach((height, j) => {
        acc[j] = height;
      });
    } else {
      //subsequent rows add to columns
      heights.forEach((height, j) => {
        acc[j] += height;
      });
    }
    return acc;
  }, Array(data.length).fill(""));
}
