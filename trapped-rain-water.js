/**
 * @param {number[]} heights
 * @return {number}
 */
var trap = function(heights) {
    let left  = 0;
    let right = left + 1;
    let maxLefts = [];
    let maxRights = [];

    let leftMax = 0;
    let rightMax = 0;
    for( let i = 0; i < heights.length; i++ ) {
        maxLefts[i] = leftMax;
        maxRights[ heights.length - i ] = rightMax;

        if( heights[i] > leftMax ) {
            leftMax = heights[i];
        }

        if( heights[ heights.length - i ] > rightMax ) {
            rightMax = heights[ heights.length - i ];
        }
    }

    let tempWater = 0;
    
    for ( let i = 1; i < heights.length - 1; i++ ) {
        tempWater += Math.max( ( Math.min( maxLefts[i], maxRights[i] ) ) - heights[i], 0 );
    }

    return tempWater;
};

console.log( trap( [4,2,0,3,2,5] ));