/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const strLen = s.length;
    let left = 0;
    let right = strLen - 1;
    let isPalin = true;

    while( left < right ) {
        const leftCharCode = s.charCodeAt(left);
        const rightCharCode = s.charCodeAt(right);
        if ( !isAlphaNumeric(leftCharCode) ) {
            left++;
            continue;
        }
        if ( !isAlphaNumeric(rightCharCode) ) {
            right--;
            continue;
        }
        if ( leftCharCode !== rightCharCode ) {
            isPalin = false;
            break;
        }
        left++;
        right--;
    } 
};

function isAlphaNumeric( code ) {
    if ( !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
};