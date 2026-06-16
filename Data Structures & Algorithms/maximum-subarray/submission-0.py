class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # assume maxSub is the first element and curSum is 0
        maxSub, curSum = nums[0], 0
        for num in nums:
            # we reset when we add negative value
            if curSum < 0:
                curSum = 0
            curSum += num
            maxSub = max(curSum, maxSub) 
        return maxSub