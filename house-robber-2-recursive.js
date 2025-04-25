class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = {
            0: {},
            1: {}
        };
        return Math.max( nums[0] + this.dfs( nums, 2, true, memo ), this.dfs( nums, 1, false, memo ) );
    }

    dfs( nums, index, avoidLast, memo ) {
        if ( index >= nums.length - ( avoidLast ? 1 : 0 ) ) {
            return 0;
        }

        const mainIndex = [ avoidLast ? 0 : 1 ];

        if ( memo[ mainIndex ][index] ) {
            return memo[ mainIndex ][index];
        }

        memo[ mainIndex ][index] = Math.max( this.dfs( nums, index + 1, avoidLast, memo ), nums[ index ] + this.dfs( nums, index + 2, avoidLast, memo ) );
        return memo[ mainIndex ][index];
    }
}
