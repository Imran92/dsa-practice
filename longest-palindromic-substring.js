/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if ( s.length === 0 ) {
        return '';
    }

    let maxLen = 1;
    let start = 0;
    let end = 0;

    for ( let i = 0; i < s.length; i++ ) {
        
        for ( let j = 0; j <= 1; j++ ) {
            let low = i;
            let high = i + j;

            while( low >= 0 && high < s.length && s.charAt(low) === s.charAt(high) ) {
                if ( ( high - low + 1 ) > maxLen ) {
                    maxLen = high - low + 1;
                    start = low;
                    end = high;
                }
                low--;
                high++;
            }
        }
    }

    return s.substring(start, end + 1);
};

console.log(longestPalindrome('baxpapdcccdlldllab'));