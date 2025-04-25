class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const items = [];
        const pairs = {
            ']' : '[',
            '}' : '{',
            ')' : '(',
        };

        for ( let i = 0; i < s.length; i++ ) {
            const ch = s.charAt(i);
            if (
                ch === ')' ||
                ch === '}' ||
                ch === ']'
            ) {
                const popped = items.pop();
                if ( pairs[ch] !== popped ) {
                    return false;
                }
            } else {
                items.push(ch);
            }
        }
        
        return items.length ? false : true;
    }
}

console.log( ( new Solution() ).isValid('([{}])') );