/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let index = 0;

    if ( s.length === 0 || s.length === 1 ) {
        return s.length;
    }

    const chars = {};
    let maxNum = 0;
    let tempNum = 0;

    while ( index < s.length ) {
        const ch = s.charAt( index );

        if ( ! isNaN( chars[ ch ] ) ) {
            left = chars[ ch ] >= left ? ( chars[ ch ] + 1 ) : left;
            tempNum = index - left;
        }

        chars[ ch ] = index;
        tempNum+=1;

        if ( tempNum > maxNum ) {
            maxNum = tempNum;
        }

        index++;
    }
    return maxNum;
};

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLen = 0;
        let tempLen = 0;
        let left = 0;
        let charMap = {};

        for( let right = 0; right < s.length; right++ ) {
            const ch = s.charAt( right );

            if ( ! isNaN( charMap[ ch ]) ) {
                const lastIndex = charMap[ ch ];
                left = Math.max( lastIndex + 1, left );
            }
            tempLen = right - left + 1;

            if ( tempLen > maxLen ) {
                maxLen = tempLen;
            }

            charMap[ch] = right;
        }

        return maxLen;
    }
}

console.log( ( new Solution() ).lengthOfLongestSubstring( 'thequickbrownfoxjumpsoverthelazydogthequickbrownfoxjumpsovert' ) );