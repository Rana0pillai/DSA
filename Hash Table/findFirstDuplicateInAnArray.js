// find first duplicate in an array
 
// Q1
// array = [1,2,3,4,1,2,4] 
// O/P = 1

// Q2
// array = [1,2,2] 
// O/P = 2

// Q1
// array = [1,2,3,4] 
// O/P = undefined

let findFirstDuplicate0 = (array) => { // using set
    const valueToCompare = new Set();
    for(element of array) {
        if(valueToCompare.has(element)){
            return element
        }
        valueToCompare.add(element)
    }
    return undefined;
}

let findFirstDuplicate1 = (array) => { // using hash table
    const valueToCompare = {};
    for(element of array) {
        if(valueToCompare[element]){
            return element
        }
        valueToCompare[element] = true;
    }
    return undefined;
}

console.log(findFirstDuplicate1([1,2]));