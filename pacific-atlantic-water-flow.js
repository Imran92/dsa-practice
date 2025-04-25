/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const pSet = [];
    const aSet = [];
    const result = [];

    const m = heights.length;
    const n = heights[0].length;


    for ( let i = 0; i < m; i++ ) {
        pSet[i] = [];
        aSet[i] = [];
    }

    for ( let i = 0; i < m; i++ ) {
        for ( let j = 0; j < n; j++ ) {
            if ( i === 0 || j === 0 ) {
                dfs( i, j, heights[i][j], heights, pSet );
            }

            if ( i === m - 1 || j === n - 1 ) {
                dfs( i, j, heights[i][j], heights, aSet );
            }
        }
    }

    console.log( pSet );
    console.log( aSet );

    for ( let i = 0; i < m; i++ ) {
        for ( let j = 0; j < n; j++ ) {
            if ( pSet[i][j] && aSet[i][j] ) {
                result.push( [i,j] );
            }
        }
    }

    return result;
};

const dfs = ( i,j, height, heights, dfsMap ) => {
    if ( i < 0 || j < 0 || i > heights.length - 1 || j > heights[i].length - 1 ) {
        return;
    }
    if ( dfsMap[i][j] ) {
        return;
    }

    if ( heights[i][j] >= height ) {
        dfsMap[i][j] = true;

        dfs( i + 1, j, heights[i][j], heights, dfsMap );
        dfs( i - 1, j, heights[i][j], heights, dfsMap );
        dfs( i, j + 1, heights[i][j], heights, dfsMap );
        dfs( i, j - 1, heights[i][j], heights, dfsMap );
    } 
}

console.log(
    pacificAtlantic(
        [
            [1,2,3],
            [8,9,4],
            [7,6,5]
        ]
    )
)
