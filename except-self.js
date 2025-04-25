/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = [];
    output[0] = nums[0];
    for( i = 1; i < nums.length; i++ ) {
        output[i] = nums[i] * output[i - 1]; 
    }

    console.log('op1');
    console.log(output);

    for( i = nums.length - 2; i > -1; i-- ) {
        nums[ i ] = nums[i] * nums[i + 1]; 
    }

    console.log('op2');
    console.log(nums);

    let lastNum = 0;
    for( i = 0; i < nums.length; i++ ) {
        let thisNum = 0;

        if( i === 0 ) {
            thisNum = nums[i + 1];
        } else if ( i === nums.length - 1 ) {
            thisNum = lastNum;
        } else {
            thisNum = lastNum * nums[i+1];
        }
        lastNum = output[i];
        output[i] = thisNum;
    }

    return output;
};

console.log(productExceptSelf([2,3,5,0])); // [24, 12, 8, 6]