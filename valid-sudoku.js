class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap = {};
        const colMap = {};
        const squareMap = {};

        for ( let i = 0; i < board.length; i++ ) {
            rowMap[i] = {};
            const squareIndexI = Math.floor( i / 3 );

            if ( i % 3 === 0 ) squareMap[ squareIndexI ] = {};

            for ( let j = 0; j < board[i].length; j++ ) {
                const ch = board[i][j];
                if ( ch === '.' ) continue;

                if ( rowMap[i][ch] ) return false;

                rowMap[i][ch] = true;

                if ( ! colMap[j] ) colMap[j] = {};

                if ( colMap[j][ch] ) return false;

                colMap[j][ch] = true;

                const squareIndexJ = Math.floor( j / 3 );

                if ( ! squareMap[ squareIndexI ][ squareIndexJ ] ) squareMap[ squareIndexI ][ squareIndexJ ] = {};

                if ( squareMap[ squareIndexI ][ squareIndexJ ][ ch ] ) return false;

                squareMap[ squareIndexI ][ squareIndexJ ][ ch ] = true;
            }
        }

        return true;
    }
}
