/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let islandCount = 0;

    for ( let i = 0; i < m; i++ ) {
        for ( let j = 0; j < n; j++ ) {
            if ( grid[i][j] !== '1' ) {
                continue;
            }
            islandCount++;
            const islandStack = [ { x: i, y: j } ];

            while ( islandStack.length > 0 ) {
                const lastItem = islandStack.pop();
                grid[ lastItem.x ][ lastItem.y ] = '0';
                getOneNeighbors( grid, islandStack, lastItem.x, lastItem.y );
            }
        }
    }

    return islandCount;
};

var getOneNeighbors = function ( grid, islandStack, x, y ) {
    for ( let i = -1; i < 2; i++ ) {
        for ( let j = -1; j < 2; j++ ) {
            if ( i * j !== 0 || i === j ) {
                continue;
            }
            if ( grid[ x + i ] && grid[ x + i ][ y + j ] === '1' ) {
                islandStack.push(
                    {
                        x: x + i,
                        y: y + j,
                    }
                );
            }
        }   
    }
}

console.log( numIslands(
    [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
    ]
) );