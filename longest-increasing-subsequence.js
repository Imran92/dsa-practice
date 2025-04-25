/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const lenMap = Array.from( { length: nums.length + 1 }, () => Array.from( { length: nums.length + 2 }, () => -1 ) );
    return lisRecursive( nums, 0, -1, lenMap );
};

/**
 * @param {number[]} nums 
 * @param {number} i 
 * @param {number} lastIndex 
 * @param {number[][]} lenMap 
 * @returns {number}
 */
var lisRecursive = ( nums, i, lastIndex,  lenMap ) => {
    if ( i >= nums.length ) {
        return 0;
    }

    if ( lenMap[lastIndex + 1][i] !== -1 ) {
        return lenMap[lastIndex + 1][i];
    }

    const withoutCurrent = lisRecursive( nums, i + 1, lastIndex, lenMap );

    let withCurrent = 0;
    if ( lastIndex === -1 || nums[i] > nums[lastIndex] ) {
        withCurrent = 1 + lisRecursive( nums, i + 1, i, lenMap );
    }
    lenMap[ lastIndex + 1 ][ i ] = Math.max( withCurrent, withoutCurrent );
    return lenMap[ lastIndex + 1 ][ i ];
}
//console.log( lengthOfLIS([10,9,2,5,3,7,101,18]) );