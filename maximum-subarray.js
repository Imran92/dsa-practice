/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -99999999999;
    let tempSum = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        tempSum += nums[i];
        if ( tempSum > maxSum ) {
            maxSum = tempSum;
        }
        if ( tempSum < 0 ) {
            tempSum = 0;
        }
    }
    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));