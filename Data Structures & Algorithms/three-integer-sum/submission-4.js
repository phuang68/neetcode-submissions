class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    const sortedNums = nums.sort((a,b) => a - b);
    const result = [];
    if (nums.length < 3) {
        return result;
    }
    for (let i = 0; i < sortedNums.length; i++) {
        const curNum = sortedNums[i];
        if (curNum > 0) {
            break;
        }
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
            continue;
        }
        let start = i + 1, end = sortedNums.length - 1;
        while (start < end) {
            const sum  = curNum + sortedNums[start] + sortedNums[end]
            if (sum < 0) {
                start++;
            } else if (sum > 0) {
                end--;
            } else {
                result.push([curNum, sortedNums[start], sortedNums[end]]);
                while (start < end && sortedNums[end] === sortedNums[end - 1]) {
                    end--;
                }
                while (start < end && sortedNums[start + 1] === sortedNums[start]) {
                    start++;
                }
                end--;
                start++;
            }
        }
    }
    return result;
    }
}
