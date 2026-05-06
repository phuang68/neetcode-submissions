class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        const used = new Array(nums.length).fill(false);

        const bt = (nums, per) => {
            if(per.length === nums.length) {
                res.push([...per]);
                return;
            }

            for(let i = 0; i < nums.length; i++) {
                if(used[i] === true) continue;
                per.push(nums[i]);
                used[i] = true;
                bt(nums, per);
                used[i] = false;
                per.pop();
            }
        }

        bt(nums, []);

        return res;
    }
}
