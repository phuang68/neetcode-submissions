class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        lastOfC = {}
        for i, c in enumerate(s):
            lastOfC[c] = i;

        res = []
        end = lastOfC[s[0]];
        start = 0

        for i, c in enumerate(s):
            if lastOfC[c] > end:
                end = lastOfC[c]
            if i == end:
                res.append(end - start + 1);
                start = i + 1;
            

        return res;
        