function subarraySum(arr, n, s)
{
    let sum = 0;
    let startIndex = 0;
    let endIndex = 0;
    let found = false;

    //your code here
    for ( let i = 0; i < n; i++ ) {
        sum = sum + arr[i];

        while ( sum > s && startIndex < i ) {
            sum = sum - arr[startIndex];
            startIndex++;
        }

        if ( sum === s ) {
            endIndex = i;
            found = true;
            break;
        }
    }

    if ( found ) {
        return [ startIndex + 1, endIndex + 1 ];
    } else {
        return [ -1 ];
    }
}

console.log(subarraySum([1,2,3,4], 4, 0)); // [2, 4]

