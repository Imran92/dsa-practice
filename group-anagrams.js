class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const alphabetMap = {};
        const a = 'a'.charCodeAt(0);
        const z = 'z'.charCodeAt(0);
        const anagramMap = {};

        for( let i = a; i <= z; i++ ) {
            alphabetMap[ String.fromCharCode(i) ] = 0;
        }

        for ( let i = 0; i < strs.length; i++ ) {
            const str = strs[i];
            const strCharMap = { ...alphabetMap };
            
            for ( let j = 0; j < str.length; j++ ) {
                strCharMap[ str.charAt( j ) ]++;
            }

            const key = Object.keys( strCharMap ).reduce( ( prev, curr ) => {
                return prev += curr + '-' + strCharMap[ curr ] + ',';
            }, '' );

            if ( ! anagramMap[ key ] ) {
                anagramMap[ key ] = [];
            }

            anagramMap[ key ].push( str );
        }

        return Object.keys( anagramMap ).map( key => anagramMap[ key ] );
    }
}

console.log( ( new Solution() ).groupAnagrams( [ 'ab', 'ba', 'bad', 'dab', 'k', 'l', 'llp', 'lpl', 'pll' ] ) );
