function missingNumber(n, arr) {
    let sum = ( n * (n + 1) ) / 2;
    const arrayLength = arr.length;

    for ( let i = 0; i < arrayLength; i++ ) {
        sum = sum - arr[i];
    }

    return sum;
}

console.log( missingNumber(2, [1]) );