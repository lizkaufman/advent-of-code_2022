import data from "./input.js";

//Part 1:

const calorieSums = sumCaloriesByElf(data);

const solution_pt1 = Math.max(...calorieSums);
console.log({ solution_pt1 });

function sumCaloriesByElf(data) {
  const calorieSums = [];
  data.reduce((acc, cur) => {
    if (!cur) {
      calorieSums.push(acc);
      return 0;
    }
    return acc + cur;
  }, 0);
  return calorieSums;
}

//Part 2:

const sortedCalorieSums = calorieSums.sort((a, b) => a - b).reverse();
const solution_pt2 =
  sortedCalorieSums[0] + sortedCalorieSums[1] + sortedCalorieSums[2];
console.log({ solution_pt2 });
