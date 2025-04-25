/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    const dp1 = Array.from( { length: n }, () => 0 );
    const dp2 = Array.from( { length: n }, () => 0 );

    dp1[0] = nums[0];
    dp1[1] = Math.max( nums[1], nums[0] );

    dp2[0] = 0;
    dp2[1] = nums[1];

    for ( let i = 2; i < n; i++ ) {
        dp2[i] = Math.max( nums[i] + dp2[ i - 2 ], dp2[ i - 1 ] );

        dp1[i] = Math.max( ( i === n - 1 ? 0 : nums[i] ) + dp1[ i - 2 ], dp1[ i - 1 ] );
    }

    return Math.max( dp1[ n - 1 ], dp2[ n - 1 ] );
};