class Solution:
    def jump(self, nums: List[int]) -> int:
        res = 0;
        
        if len(nums) == 1: return res;

        curStep = 0
        nextStep = 0

        for i in range(len(nums)):
            # keep track of where next step reaches
            nextStep = max(nextStep, i + nums[i]);

            # only jump a step when reaching current step
            if i == curStep:
                res += 1
                curStep = nextStep
                # if curStep reach beyond the end, no need for next step
                if curStep >= len(nums) - 1:
                    break;

        return res;
                