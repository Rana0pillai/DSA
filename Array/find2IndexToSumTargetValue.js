// find2IndexToSumTargetValue

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

let find2IndexToSumTargetValue = (nums, target) => {
    if(!nums || !target) return "Value provided is not valid";
    
   for(let i=0; i<nums.length; i++) {
       if(nums[i] + nums[i+1] == target){
           return [i, i+1];
       }
   }
   return "No Pair Found";
}

// Case 1
console.log('Case 1::::>', find2IndexToSumTargetValue([2,7,11,15], 9));

// Case 2
console.log('Case 2::::>', find2IndexToSumTargetValue([3,2,4], 6));

// Case 3
console.log('Case 3::::>', find2IndexToSumTargetValue([3,3], 60));