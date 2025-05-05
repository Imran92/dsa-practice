class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0, j = numbers.length - 1;
        let sum = 0;
        while( i < j ) {
            sum = numbers[i] + numbers[j];

            if ( numbers[i] + numbers[j] === target ) return [ i + 1, j + 1 ];
            if ( sum > target ) j--;
            if ( sum < target ) i++;
        }
    }
}
