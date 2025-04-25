function minimumBribes( q ) {
    let bribes = 0;
    let chaotic = false;
    for (let i = 0; i < q.length; i++) {
        if (q[i] - (i + 1) > 2) {
            chaotic = true;
            break;
        }
        
        if ( q[i] > i + 1 ) {
            bribes += q[i] - (i + 1);
        }
    }
    if (chaotic) {
        console.log("Too chaotic");
    } else {
        console.log(bribes);
    }
}

minimumBribes( [2, 1, 5, 3, 4] ); // 3