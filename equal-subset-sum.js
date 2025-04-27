class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const totalSum = nums.reduce( ( total, n ) => total + n, 0 );

        if ( totalSum % 2 !== 0 ) return false;

        const memo = {};

        const dfs = ( i, remains ) => {
            if ( remains === 0 ) return true;

            if ( remains < 0 ) return false;

            if ( i >= nums.length ) return false;

            if ( memo[i] === undefined ) {
                memo[i] = {};
            }

            if ( memo[ i ][ remains ] !== undefined ) return memo[ i ][ remains ];

            const withThisNum = dfs( i + 1, remains - nums[i] );

            if ( withThisNum ) {
                memo[ i ][ remains ] = true;
                return true;
            }

            memo[ i ][ remains ] = dfs( i + 1, remains );
            return memo[ i ][ remains ];
        }

        return dfs( 0, totalSum / 2 );
    }
}
