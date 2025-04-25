/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const prefixArray = [];
    let suffixArray = [];
    let maxNum = -999999999999999;

    let suffixPrev = 1;
    let prefixPrev = 1;

    for ( let i = 0; i < nums.length; i++ ) {
        prefixPrev = nums[i] * prefixPrev;
        suffixPrev = nums[ nums.length - i - 1 ] * suffixPrev;

        prefixArray.push( prefixPrev );
        suffixArray.push( suffixPrev );

        prefixPrev = prefixPrev === 0 ? 1 : prefixPrev;
        suffixPrev = suffixPrev === 0 ? 1 : suffixPrev;
    }

    suffixArray = suffixArray.reverse();

    for ( let i = 0; i < nums.length; i++ ) {
        const localMax = Math.max( suffixArray[i], prefixArray[i] );
        if ( localMax > maxNum ) {
            maxNum = localMax;
        }
    }
    return maxNum;
};

console.log( maxProduct( [2,3,-2,4] ) );