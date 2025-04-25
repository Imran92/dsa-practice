class Solution {
    memo = {};
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        return Math.min( this.minCostRecursive( 0, cost ), this.minCostRecursive( 1, cost ) );
    }
    
    minCostRecursive( index, cost ) {
        if ( index >= cost.length ) {
            return 0;
        }

        if ( this.memo[index] !== undefined ) {
            return this.memo[index];
        }

        this.memo[index] = cost[index] + Math.min( this.minCostRecursive( index + 1, cost ), this.minCostRecursive( index + 2, cost ) );
        return this.memo[index];
    }
}