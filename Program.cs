int ClimbStairs( int n )
{
    int[] memory = new int[ n + 1 ];

    for ( int i = 0; i <= n; i++ ) {
        memory[i] = -1;
    }

    return WayCount( n, memory );
}

int WayCount( int n, int[] mem )
{
    if ( n < 2 ) {
        return 1;
    }

    if ( mem[n] > -1 ) {
        return mem[ n ];
    }

    mem[n] = WayCount( n - 1, mem ) + WayCount( n - 2, mem );
    return mem[n];
}

Console.WriteLine( ClimbStairs( 2 ) );