

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

// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// console.log(deepEqual(obj, {here: 1, object: 2}));
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
