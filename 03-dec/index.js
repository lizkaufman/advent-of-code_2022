import data from "./input.js";

//Part 1:

const prioritiesKey = generatePrioritiesObject();
const solution_pt1 = sumDuplicatePriorities(data);
console.log({ solution_pt1 });

function generatePrioritiesObject() {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let priorities = {};

  letters.forEach((letter, i) => {
    priorities = { ...priorities, [letter]: i + 1 };
  });

  return priorities;
}

function findDuplicateItem(items) {
  const firstCompartment = [...items.slice(0, items.length / 2)];
  const secondCompartment = [...items.slice(items.length / 2)];
  let duplicate;

  for (let i = 0; i < firstCompartment.length; i++) {
    duplicate = secondCompartment.find((item) => item === firstCompartment[i]);
    if (duplicate) {
      break;
    }
  }

  return duplicate;
}

function sumDuplicatePriorities(data) {
  const duplicates = data.map(findDuplicateItem);
  return duplicates.reduce((acc, cur) => acc + prioritiesKey[cur], 0);
}
