let txt1 = '';
let txt2 = '';
let memoizeMap = [];
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    txt1 = text1;
    txt2 = text2;

    memoizeMap = Array.from( { length: text2.length }, () => Array.from( { length: text1.length }, () => false ) );

    return recursivelyCheckSequence( 0, 0 );
};

var recursivelyCheckSequence = ( i, j ) => {
    if ( i >= txt1.length || j >= txt2.length ) {
        return 0;
    }

    if ( memoizeMap[j][i] !== false ) {
        return memoizeMap[j][i];
    }

    if ( txt1[i] === txt2[j] ) {
        memoizeMap[j][i] = 1 + recursivelyCheckSequence( i + 1, j + 1 );
        return memoizeMap[j][i];
    }

    memoizeMap[j][i] = Math.max( recursivelyCheckSequence( i + 1, j ), recursivelyCheckSequence( i, j + 1 ) );
    return memoizeMap[j][i];
}

console.log( longestCommonSubsequence( 'abcdaf', 'acbcf' ) );