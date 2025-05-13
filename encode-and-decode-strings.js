class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce( ( prev, curr ) => {
            prev += curr.length + '#' + curr;
        }, '' );
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        for ( i = 0; i < str.length; i++ ) {
            let tempNum = '';
            while ( str.charAt(i) !== '#' ) {
                tempNum += str.charAt(i);
            }
            const count = parseInt( tempNum );
            res.push( str.substring(i, i + count ) );
            i += count;
        }
        return res;
    }
}