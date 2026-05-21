class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const houseAmount = nums.length;
        if(houseAmount === 1) {
            return nums[0];
        }

        if(houseAmount === 2) {
            return Math.max(nums[0], nums[1]);
        }

        const numsWithoutFirst = nums.slice(1);
        const numsWithoutLast = nums.slice(0, houseAmount - 1);
        // If not rob first house
        const dpRobLast = new Array(numsWithoutFirst.length).fill(0);
        // If not rob last house
        const dpRobFirst = new Array(numsWithoutLast.length).fill(0);
        
        console.log(numsWithoutFirst)
        console.log(numsWithoutLast)
        dpRobLast[0] = numsWithoutFirst[0];
        dpRobLast[1] = Math.max(dpRobLast[0], numsWithoutFirst[1]);

        dpRobFirst[0] = numsWithoutLast[0];
        dpRobFirst[1] = Math.max(dpRobFirst[0], numsWithoutLast[1]);

        for(let i = 2; i < numsWithoutLast.length; i++) {
            dpRobFirst[i] = Math.max(dpRobFirst[i - 2] + numsWithoutLast[i], dpRobFirst[i - 1]);
        }

        for(let i = 2; i < numsWithoutFirst.length; i++) {
            dpRobLast[i] = Math.max(dpRobLast[i - 2] + numsWithoutFirst[i], dpRobLast[i - 1]);
        }
        return Math.max(dpRobFirst[numsWithoutLast.length - 1], dpRobLast[numsWithoutFirst.length - 1]);
    }   
}
