class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set();
        let maxLen = 0;
        for( let num of nums ) {
            numSet.add( num );
        }

        for( let num of nums ) {
            let nextNum = num + 1;
            let localCount = 1;
            numSet.delete( num );
            while( numSet.has( nextNum ) ) {
                numSet.delete( nextNum );
                localCount++;
                nextNum++;
            }

            nextNum = num - 1;
            while( numSet.has( nextNum ) ) {
                numSet.delete( nextNum );
                localCount++;
                nextNum--;
            }

            maxLen = Math.max( maxLen, localCount );
        }

        return maxLen;
    }
}
