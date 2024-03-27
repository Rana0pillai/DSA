// Moves zero to the end

let moveZerosToEnd = (array) => {
    for(let i=0; i<array.length; i++){
        if(array[i] == 0){
            array.splice(i, 1);
            array.push(0);
        }        
    }
    return array;
}

console.log(moveZerosToEnd([0,1,0,3,12]));