class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        res = []

        intervals.sort(key=lambda p: p[0])
        res.append(intervals[0])

        for [start, end] in intervals[1:]:
            lastEnd = res[-1][1]
            if lastEnd < start:
                res.append([start, end])
            else:
                lastEnd = max(end, lastEnd)
                res[-1][1] = lastEnd
                
        return res