/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;

    while ( lo <= hi ) {
        const mid = Math.floor( ( hi + lo ) / 2 );

        if ( nums[ mid ] === target ) {
            return mid;
        }
        
        if ( nums[ mid ] >= nums[ lo ] ) {
            if ( target >= nums[ lo ]  && target < nums[ mid ] ) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        } else {
            if ( target > nums[ mid ] && target <= nums[ hi ] ) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
    }

    return -1;
};

console.log( search( [ 3, 1 ], 3 ) );