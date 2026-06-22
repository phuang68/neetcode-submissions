class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        if sum(gas) - sum(cost) < 0:
            return -1; 

        curSum, start = 0, 0
        for i in range(len(gas)):
            curSum += gas[i] - cost[i]
            if curSum < 0:
                start = i + 1;
                curSum = 0
        
        return start