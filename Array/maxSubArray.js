// Maximum number we get after adding the element in array

function maxSubArray(nums) {
    if (!nums || nums.length === 0) return 0;

    let maxSum = nums[0]; // Initialize maxSum with the first element
    let currentSum = nums[0]; // Initialize currentSum with the first element

    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Calculate the current sum by adding the current element or starting new subarray
        currentSum = getMax(nums[i], currentSum + nums[i]);
        
        // Update maxSum if the current sum is greater
        maxSum = getMax(maxSum, currentSum);
    }

    return maxSum; // Return the maximum sum
}

function getMax(a, b) {
    // Compare a and b and return the maximum value
    return a > b ? a : b;
}

// Test the function with the given example
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Maximum sum of subarray:", maxSubArray(nums)); // Output: 6
