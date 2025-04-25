/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    //[5,1,2,3,4]
    let lo = 0;
    let hi = nums.length - 1;

    let smallest = 9999;

    while ( lo <= hi ) {
        const mid = Math.floor( ( lo + hi ) / 2 );
        const num = nums[ mid ];

        if ( smallest > num ) {
            smallest = num;
        }

        console.log( lo + ' --- ' + hi );

        // if left is sorted.
        if ( nums[lo] <= num ) {
            if ( smallest > nums[lo] ) {
                smallest = nums[lo];
            }
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return smallest;
};

console.log( findMin( [3,4,5,1,2] ) );