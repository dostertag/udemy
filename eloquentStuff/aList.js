// let list = {
//     value: 1,
//     rest : {
//         value : 2,
//         rest : {
//             value : 3,
//             rest : {
//                 ...
//             }
//         }
//     }
// }

function deepEqual(valueOne, valueTwo) {
    // guess there's no hashset/key in js???
    if (valueOne === valueTwo) {
        return true;
    }
    if (valueOne == null || typeof valueOne != "object" ||
        valueTwo == null || typeof valueTwo != "object") {
            return false;
        }
    let keysValOne = Object.keys(valueOne);
    let keysValTwo = Object.keys(valueTwo);

    if (keysValOne.length != keysValTwo.length) {
        return false;
    }

    // loop over each key to test equality, including other nested objects with recursive call
    for (let key of keysValOne) {
        if (!keysValTwo.includes(key) || !deepEqual(valueOne[key], valueTwo[key])) {
            return false;
        }
    }
    return true;
}

function arrayToList(arr) {
    let newList = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        newList = {value: arr[i], rest: newList};
    }
    return newList;
    // console.log(newList);
}

var someArray = ["first", "second", "third"];
var someList = arrayToList(someArray);
var someOtherArray = ["first", "second", "third"];
var someSecondList = arrayToList(someOtherArray);
console.log(deepEqual(someList, someSecondList));

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

// console.log(listToArray(someList));

function prepend(value, list) {
    return {value, rest : list}; // returns a new object???
}

someList = prepend("test", someList);
console.log(someList);
someList = prepend("testTwo", someList);
console.log(someList);
console.log(deepEqual(someList, someSecondList));

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

let t = nth(someList, 3);
console.log(t);