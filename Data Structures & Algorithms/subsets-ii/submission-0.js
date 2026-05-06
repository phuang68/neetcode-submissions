class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const sorted = nums.sort((a, b) => a - b);
        const res = [];
        const path = [];
        const used = new Array(sorted.length).fill(false);

        const bt = (startIndex) => {
            res.push([...path]);

            for(let i = startIndex; i < sorted.length; i++) {
                if(i > 0 && sorted[i] === sorted[i - 1] && used[i - 1] === false) {
                    continue;
                }

                path.push(sorted[i]);
                used[i] = true;
                bt(i + 1);
                used[i] = false;
                path.pop();
            }
        }

        bt(0);

        return res;
    }
}
