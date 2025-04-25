function maxSubarraySum(arr, n) {
    let maxTillNow = - 1 * Number.MAX_VALUE;
    let localMax = 0;

    for( let i = 0; i < n; i++ ) {
        localMax += arr[i];

        if( localMax > maxTillNow ) {
            maxTillNow = localMax;
        }

        if( localMax < 0 ) {
            localMax = 0;
        }
    }
    return maxTillNow;
}

console.log( maxSubarraySum( [-1,-2,-3,-4], 4 ));