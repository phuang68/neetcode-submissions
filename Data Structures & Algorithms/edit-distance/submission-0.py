class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        if word1 == "":
            return len(word2)
        if word2 == "":
            return len(word1)

        l1, l2 = len(word1), len(word2)
        dp = [[max(l1, l2)] * (l2 + 1) for _ in range(l1 + 1)]

        dp[l1][l2] = 0;

        # initialize when word 1 is empty
        for i in range(l1 - 1, -1, -1):
            dp[i][l2] = 1 + dp[i + 1][l2];

        # initialize when word 2 is empty
        for j in range(l2 - 1, -1, -1):
            dp[l1][j] = 1 + dp[l1][j + 1];


        for i in range(l1 - 1, -1, -1):
            for j in range(l2 - 1, -1, -1):
                if word1[i] == word2[j]:
                    dp[i][j] = dp[i + 1][j + 1]
                else:
                    dp[i][j] = 1 + min(dp[i + 1][j + 1], min(dp[i + 1][j], dp[i][j + 1]))
                
        return dp[0][0]