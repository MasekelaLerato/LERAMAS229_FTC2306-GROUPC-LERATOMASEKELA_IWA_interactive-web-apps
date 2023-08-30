const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

const firstList = data.lists.find((item) => item[0] === "first")[1];
const secondList = data.lists.find((item) => item[0] === "second")[1];
const thirdList = data.lists.find((item) => item[0] === "third")[1];
const result = [];

const extractBiggest = () => {
  const firstLast = firstList[firstList.length - 1];
  const secondLast = secondList[secondList.length - 1];
  const thirdLast = thirdList[thirdList.length - 1];

  if (firstLast >= secondLast && secondLast >= thirdLast) {
    firstList.pop();
    return firstLast;
  }

  if (secondLast >= thirdLast && thirdLast >= thirdLast) {
    secondList.pop();
    return secondLast;
  }

  if (thirdLast <= secondLast && secondLast >= firstLast) {
    thirdList.pop();
    return thirdLast;
  } else {
    return thirdList.pop();
  }
};

console.log(result);
// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
