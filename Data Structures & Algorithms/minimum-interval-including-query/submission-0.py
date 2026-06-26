class Solution:
    def minInterval(self, intervals: List[List[int]], queries: List[int]) -> List[int]:
        intervals.sort()

        minHeap = []
        res, i = {}, 0

        for q in sorted(queries):

            while i < len(intervals) and intervals[i][0] <= q:
                l, r = intervals[i]
                heapq.heappush(minHeap, (r - l + 1, r))
                i += 1
            
            while minHeap and minHeap[0][1] < q:
                heapq.heappop(minHeap)

            res[q] = -1 if len(minHeap) == 0 else minHeap[0][0]

        return [ res[q] for q in queries ]
