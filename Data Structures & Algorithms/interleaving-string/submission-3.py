class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        l1, l2 = len(s1), len(s2)
        if l1 + l2 != len(s3):
            return False;

        dp = [[False] * (l2 + 1) for _ in range(l1 + 1)]

        dp[l1][l2] = True;

        for i in range(l1, -1, -1):
            for j in range(l2, -1, -1):
                if i < l1 and s1[i] == s3[i + j] and dp[i + 1][j] == True:
                    dp[i][j] = True
                if j < l2 and s2[j] == s3[i + j] and dp[i][j + 1] == True:
                    dp[i][j] = True

        return dp[0][0]