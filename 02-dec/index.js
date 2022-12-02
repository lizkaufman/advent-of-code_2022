import data from "./input.js";

//Part 1:

const solution_pt1 = calculateMoveScore(data) + calculateResultScore(data);
console.log({ solution_pt1 });

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

function calculateResultScore(data) {
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

//Part 2:

const solution_pt2 = calculateUpdatedScore(data);
console.log({ solution_pt2 });

function calculateUpdatedScore(data) {
  const pointsForMoves = {
    A: { win: 2, lose: 3, draw: 1 },
    B: { win: 3, lose: 1, draw: 2 },
    C: { win: 1, lose: 2, draw: 3 },
  };
  return data.reduce((acc, cur) => {
    if (cur[2] === "X") {
      // X -> need to lose -> 0
      return acc + pointsForMoves[cur[0]].lose;
    }
    if (cur[2] === "Y") {
      // Y -> need to draw -> 3
      return acc + 3 + pointsForMoves[cur[0]].draw;
    }
    if (cur[2] === "Z") {
      // Z -> need to win -> 6
      return acc + 6 + pointsForMoves[cur[0]].win;
    }
  }, 0);
}
