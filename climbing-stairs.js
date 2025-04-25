/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = {};
    const dfs = (n) => {
        if ( n < 2 ) {
            return 1;
        }
        if ( memo[ n ] ) {
            return memo[ n ];
        }

        memo[n] = dfs( n - 1 ) + dfs( n - 2 );
        return memo[n];
    }
    return dfs(n);
};