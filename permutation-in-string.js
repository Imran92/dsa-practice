/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const s1len = s1.length;
    const s2len = s2.length;
    let isEqual = false;

    if ( s1len > s2len ) {
        return false;
    }

    const item1 = {};
    const item2 = {};

    for (let i = 97; i <= 122; i++) {
        const ch = String.fromCharCode(i);
        item1[ch] = 0;
        item2[ch] = 0;
    }

    for( let i = 0; i < s1len; i++ ) {
        const ch = s1.charAt(i);
        item1[ ch ] = item1[ ch ] ? ( item1[ ch ] + 1 ) : 1;
    }

    for( let i = 0; i < s2len; i++ ) {
        const ch = s2.charAt( i );
        item2[ ch ]++;

        if ( i >= s1len ) {
            const firstChar = s2.charAt( i - s1len );
            item2[ firstChar ]--;
        }

        if ( i >= s1len - 1 ) {
            isEqual = checkIfObjectsEqual( item1, item2 );
        }

        if ( isEqual ) {
            break;
        }
    }
    return isEqual;
};

var checkIfObjectsEqual = function( obj1, obj2 ) {
    let equal = true;
    for (let i = 97; i <= 122; i++) {
        const ch = String.fromCharCode(i);
        if ( obj1[ch] !== obj2[ch] ) {
            equal = false;
            break;
        }
    }
    return equal;
}

console.log( checkInclusion( 'a', 'ab' ) );