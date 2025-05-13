class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const l = nums.length;
        const leftProducts = [nums[0]];
        const rightProducts = [];
        rightProducts[l - 1] = nums[l - 1];

        for ( let i = 1; i < l; i++ ) {
            leftProducts[i] = leftProducts[i - 1] * nums[i];
            rightProducts[l - 1 - i] = rightProducts[ l - i ] * nums[ l - 1 - i ];
        }
        for ( let i = 0; i < l; i++ ) {
            nums[i] = ( leftProducts[ i - 1 ] === undefined ? 1 : leftProducts[ i - 1 ] ) *
            ( rightProducts[ i + 1 ] === undefined ? 1 : rightProducts[ i + 1 ] );
        }
        return nums;
    }
}
