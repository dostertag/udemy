

// function range(start, end, counter) {
//     let numArray = [];
//     for (let i = start; i <= end; i++) {
//         numArray.push(i);
//     }
//     return numArray;
// }

// var rangeTest = range (40, 50);
// console.log(rangeTest);

// function sum(inputArray) {
//     let tempSum = 0;
//     for (var element of inputArray) {
//         tempSum += element;
//     }
//     return tempSum;
// }

// console.log(sum(rangeTest));

function reverseArray(inputArray) {
    let tempArray = [];
    for (let i = inputArray.length - 1; i >= 0; i--) {
        tempArray.push(inputArray[i]);
    }
    return tempArray;
}

function reverseArrayInPlace(inputArray) {
    for (let i = 0, k = inputArray.length - 1; i < inputArray.length; i++, k--) {
        if (i >= k) {
            // console.log(i);
            break;
        } else {
            let tempK = inputArray[k];
            let tempI = inputArray[i];
            inputArray[k] = tempI;
            inputArray[i] = tempK;
            console.log(inputArray);
        }
    }
}
let arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// var words = ["yeah", "hope", "this", "works"];
// var wordsReversed = reverseArray(words);
// console.log(wordsReversed);