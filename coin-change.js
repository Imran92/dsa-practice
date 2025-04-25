class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     *
     * @return {number}
     */
    coinChange(coins, amount ) {
        const memo = {};

        const coinDfs = ( amount ) => {
            if ( amount === 0 ) {
                return 0;
            }

            if ( memo[ amount ] ) {
                return memo[ amount ];
            }

            let minCoins = Number.MAX_SAFE_INTEGER;

            for ( let i = 0; i < coins.length; i++ ) {
                const c = coins[i];
                const remains = amount - c;
                if ( remains >= 0 ) {
                    let tempRemain = coinDfs( coins, remains );
                    if ( tempRemain !== Number.MAX_SAFE_INTEGER ) {
                        tempRemain += 1;
                    }
                    minCoins = Math.min( minCoins, tempRemain );
                }
            }
            memo[ amount ] = minCoins;
            return minCoins;
        }

        const minCoins = coinDfs( amount );
        return minCoins === Number.MAX_SAFE_INTEGER ? -1 : minCoins;
    }
}
