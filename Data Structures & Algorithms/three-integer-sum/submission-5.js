class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        const res = [];

        if(sortedNums[0] > 0 || sortedNums.length < 3) {
            return res;
        }

        for(let i = 0; i < sortedNums.length; i++) {
            // Make sure no duplicate starting point
            if(i > 0 && sortedNums[i] === sortedNums[i - 1]){
                continue;
            }
            
            const cur = sortedNums[i];
            let l = i + 1;
            let r = sortedNums.length - 1;

            while(l < r) {
                if(sortedNums[l] + sortedNums[r] + cur < 0){
                    l++;
                } else if(sortedNums[l] + sortedNums[r] + cur > 0) {
                    r--;
                } else {
                    res.push([cur, sortedNums[l], sortedNums[r]]);
                    l++;
                    r--;
                    // skip duplicate left
                    while(l < r && sortedNums[l] === sortedNums[l - 1]) {
                        l++;
                    }
                    // skip duplicate right
                    while(l < r && sortedNums[r] === sortedNums[r + 1]) {
                        r--;
                    }
                }
            }
        }
        
        return res;
    }
}
