/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;

    if ( n === 0 ) {
        return 0;
    }

    if ( n > 1 ) {
        nums[1] = Math.max( nums[0], nums[1] );            
    }

    for ( let i = 2; i < n; i++ ) {
        nums[i] = Math.max( nums[i] + nums[ i - 2 ], nums[ i - 1 ] );
    }

    return nums[ n - 1 ];
};