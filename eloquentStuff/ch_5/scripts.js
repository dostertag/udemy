// flattening use concat and reduce

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));

/************************ as an example */
// const euros = [29.76, 41.85, 46.5];

// const doubled = euros.reduce((total, amount) => {
//   total.push(amount * 2);
//   return total;
// }, []);       empty array is the initial return value -> left blank it defaults to zero

// doubled // [59.52, 83.7, 93]

console.log("************************");

const fruitBasket = ['banana', 'cherry', 'orange', 'apple',
                    'cherry', 'orange', 'apple', 'banana', 'cherry',
                    'orange', 'fig'];

const count = fruitBasket.reduce( (tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1 ;
    return tally;
    } , {})

console.log(count);

console.log("************************");


// loop function takes a value, a test function, a count function, and a body function.... WTF??

function loop(someValue, someConditionFunction, someCountingFunction, someBodyFunction) {
    for(let realValue = someValue; someConditionFunction(realValue); realValue = someCountingFunction(realValue) ) {
        someBodyFunction(realValue);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);

console.log("************************");

// "EVERYTHING"
function every(array, test) {
    for(let element of array) {
        if(!test(element)) {
            return false;
        }
    }
    return true;
}

console.log(every([1,3, 5], n => n < 10));
// should be true
console.log(every([2, 4, 16], n => n < 10));
// should be false
console.log(every([], n => n < 10));
// true???

console.log("************************");

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
// function textScripts(text) {
//     let scripts = countBy(text, char => {
//       let script = characterScript(char.codePointAt(0));
//       return script ? script.name : "none";
//     }).filter(({name}) => name != "none");
  
//     let total = scripts.reduce((n, {count}) => n + count, 0);
//     if (total == 0) return "No scripts found";
  
//     return scripts.map(({name, count}) => {
//       return `${Math.round(count * 100 / total)}% ${name}`;
//     }).join(", ");
//   }
  
//   console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
  // → 61% Han, 22% Latin, 17% Cyrillic

  function dominantDirection(text) {
    let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
  
    if (counted.length == 0) return "ltr";
  
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
  }         // this code throws an error here, but works in the eloquent editor.... 
            // no idea what's going on here... really should go through SICP.... it's sitting on my nightstand...

console.log(dominantDirection("Hello!"));
// ltr
console.log(dominantDirection("Hey, مساء الخير"));
// rtl
    

