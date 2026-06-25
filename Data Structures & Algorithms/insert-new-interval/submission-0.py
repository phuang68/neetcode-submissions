class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        res = []

        for i in range(len(intervals)):
            # insert newInterval before current interval
            if newInterval[1] < intervals[i][0]:
                res.append(newInterval)
                return res + intervals[i:]
            # insert current interval after newInterval
            elif newInterval[0] > intervals[i][1]:
                res.append(intervals[i])
            # update newInterval when overlapping with current interval
            else:
                newInterval = [min(newInterval[0], intervals[i][0]), max(newInterval[1], intervals[i][1])]
        
        # if newInterval keeps overlapping, it never gets added to res
        res.append(newInterval)

        return res