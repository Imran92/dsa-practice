/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const res = binSearch( nums, target, 0, nums.length - 1 );

    return isNaN( res ) ? -1 : res;
};

var binSearch = function( nums, target, start, end ) {
    let middle = Math.floor( ( start + end ) / 2 );

    if ( nums[middle] === target ) {
        return middle;
    }

    if ( target < nums[middle] && middle <= 0 ) {
        return - 1;
    }

    if ( target > nums[middle] && middle >= nums.length - 1 ) {
        return - 1;
    }

    return target < nums[middle] ? binSearch( nums, target, start, middle - 1 ) : binSearch( nums, target, middle + 1, end );
}

console.log( search( [2,5], 0 ) );