// Rotating an array

let rotateArray = (array, step) => {
    let rotatedArray = [];
    let lastIndexOfArray = array.length - 1;
    for ( let j = 0; j < step; j++ ) {
        rotatedArray.push(array[lastIndexOfArray]);
        for ( let i = 0; i < lastIndexOfArray; i++ ) {
            rotatedArray.push(array[i])
        }   
        array = rotatedArray
        rotatedArray = []
    }
    return array
}

console.log(rotateArray([2,3,4,5,1,7], 3));