/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function( heights ) {
    let left = 0;
    let right = heights.length - 1;

    let maxArea = 0;

    while ( left < right ) {
        const height = Math.min( heights[left], heights[right] );
        const width = right - left;
        const area = height * width;
        maxArea = Math.max( maxArea, area );
        if ( heights[left] < heights[right] ) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};