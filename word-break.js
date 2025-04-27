class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const wordSet = new Set(wordDict);
        let maxWordLen = Math.max(...wordDict.map(word => word.length), 0);

        const memo = {};
        memo[s.length] = true; // Base case: empty string is valid

        const dfs = (i) => {
            if (i >= s.length) return true;
            if (memo[i] !== undefined) return memo[i];

            for (let j = i + 1; j <= Math.min(i + maxWordLen, s.length); j++) {
                const subStr = s.substring(i, j);
                if (wordSet.has(subStr) && dfs(j)) {
                    memo[i] = true;
                    return true;
                }
            }

            memo[i] = false;
            return false;
        };

        return dfs(0);
    }
}

console.log( ( new Solution() ).wordBreak(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ["aaa","ab"]
));

// console.log( ( new Solution() ).wordBreak(
//     "abcdy",
//     ["abc","ab","dy"]
// ));