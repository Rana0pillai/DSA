// Contains duplicate

let isDuplicateElementPresentMethod1 = (array) => {
    let i = 0;
    let j = 1;
    let storedElement = array[0];
    
    while(storedElement === array[array.length - 1]){
        if(j === array.length){
            j = 0;
            i++;
            storedElement = array[i];
        }
        if(storedElement === array[j]){
            return true;            
        } else {
            j++;
        }
    }
    return false;
}

let isDuplicateElementPresentMethod2 = (array) => {
    let seen = new Set(); 

    for (let element of array) {
        if (seen.has(element)) {
            return true; 
        } else {
            seen.add(element); 
        }
    }

    return false; 
}

console.log(isDuplicateElementPresentMethod1([1,2,3,4,1]))