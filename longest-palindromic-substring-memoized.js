/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if ( s.length === 0 ) {
        return '';
    }
    const memoizedArray = Array.from( { length: s.length }, () => Array.from( { length: s.length }, () => false ) );

    let maxLen = 1;
    let start = 0;
    let end = 0;

    for ( let i = 0; i < s.length; i++ ) {
        for( let j = 0; j < i; j++ ) {
            if ( i === j ) {
                memoizedArray[i][j] = true;
            }

            if ( s[i] === s[j] && ( i - j <= 2 || memoizedArray[ j + 1 ][ i - 1 ] ) ) {
                memoizedArray[j][i] = true;

                if ( i - j + 1 > maxLen ) {
                    maxLen = i - j + 1;
                    start = j;
                    end = i;
                }
            }
        }
    }

    return s.substring(start, end + 1);
}

console.log( longestPalindrome( 'askkllkkfdd' ) );