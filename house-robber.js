/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    return robHouse( houses, 0 );
};

/**
 * @param {number[]} houses
 * @param {number[]} index
 *
 * @return {number}
 */
const robHouse = ( houses, index ) => {
    if ( index >= houses.length ) {
        return 0;
    }

    const leaveHouse = robHouse( houses, index + 1 );
    const takeHouse = houses[ index ] + robHouse( houses, index + 2 );

    return Math.max( leaveHouse, takeHouse );
}