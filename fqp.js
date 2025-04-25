function sol( queries ) {
    let res = {};
    let arr = [];
    for ( let i = 0; i < queries.length; i++ ) {
        if ( queries[i][0] === 1 ) {
            // Check if key esists in res object
            if ( res[queries[i][1]] ) {
                res[queries[i][1]]++;
            } else {
                res[queries[i][1]] = 1;
            }
        } else if ( queries[i][0] === 2 ) {
            // Check if key exists in res object
            if ( res[queries[i][1]] ) {
                res[queries[i][1]]--;
                if ( res[queries[i][1]] === 0 ) {
                    delete res[queries[i][1]];
                }
            }
        } else if ( queries[i][0] === 3 ) {
            // Check if key exists in res object
            if ( res[queries[i][1]] ) {
                arr.push(1);
            } else {
                arr.push(0);
            }
        }
    }
    return arr;
}