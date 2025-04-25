/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;

    const dpTable = Array.from( { length: n + 1 } , () => Array.from( { length: m + 1 }, () => 0 ) );

    for ( let i = 1; i <= n; i++ ) {
        for ( j = 1; j <= m; j++ ) {
            if ( text1[ j - 1] === text2[ i - 1] ) {
                dpTable[i][j] = dpTable[i - 1][j - 1] + 1;
                continue;
            }
            dpTable[i][j] = Math.max( dpTable[i - 1][j], dpTable[i][j-1] );
        }
    }

    return dpTable[n][m];
};

longestCommonSubsequence( 'abcdaf', 'acbcf' );