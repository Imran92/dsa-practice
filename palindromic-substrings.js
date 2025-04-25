class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const len = s.length;

        let palCount = 0;

        for ( let i = 0; i < len; i++ ) {
            let l = i;
            let r = i;

            while( l >= 0 && r < len && s[l] === s[r] ) {
                l--;
                r++;
                palCount++;
            }

            l = i;
            r = i+1;

            while( l >= 0 && r < len && s[l] === s[r] ) {
                l--;
                r++;
                palCount++;
            }
        }

        return palCount;
    }
}
