"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def canAttendMeetings(self, intervals: List[Interval]) -> bool:
        intervals.sort(key=lambda interval: interval.start)

        if len(intervals) == 0: return True
        
        prevEnd = intervals[0].end

        for interval in intervals[1:]:
            if interval.start >= prevEnd:
                prevEnd = interval.end;
            else:
                return False;
        
        return True;