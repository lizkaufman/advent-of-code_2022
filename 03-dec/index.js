import data from "./input.js";

//Part 1:

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
  const prioritiesKey = generatePrioritiesObject();
  const duplicates = data.map(findDuplicateItem);
  return duplicates.reduce((acc, cur) => acc + prioritiesKey[cur], 0);
}

//Part 2:

const solution_pt2 = sumBadgePriorities(data);
console.log({ solution_pt2 });

function groupElves(data) {
  const elfGroups = [];

  for (let i = 0; i < data.length; i += 3) {
    elfGroups.push(data.slice(i, i + 3));
  }

  return elfGroups;
}

function findGroupBadge(group) {
  const commonLetters = group
    .map((rucksack, i) => {
      if (!group[i + 1]) {
        return [];
      }
      return [
        ...rucksack.split("").filter((letter) => group[i + 1].includes(letter)),
      ];
    })
    .slice(0, group.length - 1);

  let badge;
  for (let i = 0; i < commonLetters[0].length; i++) {
    badge = commonLetters[1].find((item) => item === commonLetters[0][i]);
    if (badge) {
      break;
    }
  }
  return badge;
}

function sumBadgePriorities(data) {
  const prioritiesKey = generatePrioritiesObject();
  const groups = groupElves(data);
  const badges = groups.map(findGroupBadge);
  return badges.reduce((acc, cur) => acc + prioritiesKey[cur], 0);
}
