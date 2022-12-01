import data from "./input.js";

//Part 1:

const calorieSums = sumCaloriesByElf(data);

const solution = Math.max(...calorieSums);
console.log(solution);

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
