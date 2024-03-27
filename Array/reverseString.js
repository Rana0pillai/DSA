// Reverse a String

function reverseStringMethod0(str){
    let reversedString = ''
    for (let i = str.length - 1; i >= 0 ; i--) { // started the loop from end in order to get the char from last one by one
        reversedString += str[i]
    }
    return reversedString;
}

function reverseStringMethod1(str) { return str.split('').reverse().join('') }

let reverseStringMethod2 = str => [...str].reverse().join('');

console.log(reverse('rajesh kaise h tu'))


