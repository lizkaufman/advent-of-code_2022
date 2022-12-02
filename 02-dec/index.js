import data from "./input.js";

const moveScore = calculateMoveScore(data);
const resultsScore = calculateResultScore(data);
const solution_pt1 = moveScore + resultsScore;
console.log(solution_pt1);

function calculateMoveScore(data) {
  return data.reduce((acc, cur) => {
    switch (cur[2]) {
      case "X":
        //rock (1 pt)
        return acc + 1;
      case "Y":
        //paper (2 pt)
        return acc + 2;
      case "Z":
        //scissors (3 pt)
        return acc + 3;
      default:
        return acc;
    }
  }, 0);
}

function calculateResultScore() {
  return data.reduce((acc, cur) => {
    return calculateGameScore(cur) + acc;
  }, 0);
}

function calculateGameScore(gameString) {
  if (gameString[0] === "A") {
    //opponent rock
    switch (gameString[2]) {
      case "X":
        //rock - draw
        return 3;
      case "Y":
        //paper - win
        return 6;
      case "Z":
        //scissors - loss
        return 0;
      default:
        return 0;
    }
  }
  if (gameString[0] === "B") {
    //opponent paper
    switch (gameString[2]) {
      case "X":
        //rock - loss
        return 0;
      case "Y":
        //paper - draw
        return 3;
      case "Z":
        //scissors - win
        return 6;
      default:
        return 0;
    }
  }
  if (gameString[0] === "C") {
    //opponent scissors
    switch (gameString[2]) {
      case "X":
        //rock - win
        return 6;
      case "Y":
        //paper - loss
        return 0;
      case "Z":
        //scissors - draw
        return 3;
      default:
        return 0;
    }
  }
}
