/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const memo = {};
    return recursiveDecoding( s, 0, memo );
};

var recursiveDecoding = ( s, i, memo ) => {
    if ( memo[i] !== undefined ) {
        return memo[i];
    }

    if ( s[i] === '0' ) {
        return 0;
    }

    if ( i >= s.length - 1 ) {
        return 1;
    }
    
    let count = recursiveDecoding( s, i + 1, memo );

    const f = parseInt( s[i] );
    const l = i < s.length - 1 ? parseInt( s[i + 1] ) : null;
    if (
        ( f === 1 && l !== null ) ||
        ( f === 2 && l >= 0 && l <= 6 )
    ) {
        count += recursiveDecoding( s, i + 2, memo );
    }
    memo[i] = count;
    return count;
}