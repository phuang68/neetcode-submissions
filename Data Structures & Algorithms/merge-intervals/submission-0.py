class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        res = []

        intervals.sort(key=lambda p: p[0])
        res.append(intervals[0])

        for i in range(len(intervals)):
            end = res[-1][1]
            if end < intervals[i][0]:
                res.append(intervals[i])
            else:
                end = max(intervals[i][1], end)
                res[-1][1] = end
                
        return res