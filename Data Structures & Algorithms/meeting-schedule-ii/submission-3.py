"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        start = sorted([interval.start for interval in intervals])
        end = sorted([interval.end for interval in intervals])

        res, roomCount = 0, 0
        s, e = 0, 0

        while s < len(intervals):
            if start[s] < end[e]:
                roomCount += 1
                s += 1
            else:
                roomCount -=1
                e += 1
            res = max(roomCount, res)
        
        return res;