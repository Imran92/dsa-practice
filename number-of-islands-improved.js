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

            dfs( grid, i, j );
        }
    }
}

const dfs = ( grid, x, y ) => {
    if ( x < 0 || y < 0 || x >= grid.length || y >= grid[x].length ) {
        return;
    }
    grid[x][y] = 'x';

    dfs( grid, x + 1, y );
    dfs( grid, x - 1, y );
    dfs( grid, x, y - 1 );
    dfs( grid, x, y + 1);
}