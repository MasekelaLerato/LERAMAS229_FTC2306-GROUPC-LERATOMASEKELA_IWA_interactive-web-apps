const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const firstList = data.lists.find(item => item[0] === 'first')[1];
const secondList = data.lists.find(item => item[0] === 'second')[1];
const thirdList = data.lists.find(item => item[0] === 'third')[1];
const result = []


//I modified the extractBiggest function to extract the last elements of each list and compare them to find the biggest value.
const extractBiggest = () => {
    const firstLast = firstList[firstList.length - 1];
    const secondLast = secondList[secondList.length - 1];
    const thirdLast = thirdList[thirdList.length - 1];	
    
    //I used pop() to remove the last element from the corresponding list after extracting the value and pushing it into the result array.
    if (firstLast >= secondLast && firstLast >= thirdLast) {
        result.push(firstLast);
        firstList.pop();
    } else if (secondLast >= firstLast && secondLast >= thirdLast) {
        result.push(secondLast);
        secondList.pop();
    } else {
        result.push(thirdLast);
        thirdList.pop();
    }
}
for (let i = 0; i < 15; i++) {
    extractBiggest();
}
console.log(result);
// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)