/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const obj1 = {};
    const obj2 = {};

    for( let i = 0; i < t.length; i++ ) {
        const ch = t.charAt(i);
        obj1[ ch ] = obj1[ ch ] ? ( obj1[ ch ] + 1 ) : 1;
    }

    let left = 0;
    let right = left;
    let minSize = s.length + 1;
    let minLeft = 0;
    let minRight = 0;
    let lastRight = -1;

    while ( right < s.length ) {
        if ( lastRight !== right ) {
            const ch = s.charAt(right);
            obj2[ ch ] = ( ! isNaN( obj2[ ch ] ) ) ? ( obj2[ ch ] + 1 ) : 1;
            lastRight = right;
        }

        const haMissingChars = checkIfObject2HasMissingChar( obj1, obj2 );
        if ( haMissingChars ) {
            right++;
            continue;
        }

        const thisSize = right - left + 1;
        if ( thisSize < minSize ) {
            minSize = thisSize;
            minLeft = left;
            minRight = right;
        }

        obj2[ s.charAt(left) ]--;
        left++;
    }

    if ( s.length ) {
        return '';
    }

    return s.substring( minLeft, minRight + 1);
};

var checkIfObject2HasMissingChar = function( obj1, obj2 ) {
    let hasMissing = false;

    for ( const property in obj1 ) {
        if ( ! obj2[ property ] || obj2[ property ] < obj1[ property ] ) {
            hasMissing = true;
        }
    }
    return hasMissing;
}

console.log(minWindow('ADOBECODEBANC','ABC'));