// Merging 2 sorted array

function mergeSortedArr(recievedArray1, recievedArray2) {
    
    if(!recievedArray1 || !recievedArray2) { // check whether 2 arrays are provided or not
        return "One of the array is not valid"
    }
    
    if(recievedArray1.length == 0){ // check whether first array is empty then pass the second array
        return recievedArray2;
    }
    
    if(recievedArray2.length == 0){ // check whether second array is empty then pass the first array
        return recievedArray1;
    }
    
    let mergedArray = [];
    let elementFromRecievedArray1 = recievedArray1[0];
    let elementFromRecievedArray2 = recievedArray2[0];
    let i = 1;
    let j = 1;
    
    while(elementFromRecievedArray1 || elementFromRecievedArray2){
        
        if(!elementFromRecievedArray2 || 
            elementFromRecievedArray1 < elementFromRecievedArray2){
                
            mergedArray.push(elementFromRecievedArray1)
            elementFromRecievedArray1 = recievedArray1[i];
            i++;
        } else {
            
            mergedArray.push(elementFromRecievedArray2)
            elementFromRecievedArray2 = recievedArray2[j];
            j++;
        }
    }

    return mergedArray; // return the merged array
}

console.log(mergeSortedArr([0, 3, 4, 31], [4, 6, 30]))