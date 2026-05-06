class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];
        const path = [];
        const sorted = candidates.sort((a, b) => a - b);
        const used = new Array(sorted.length).fill(false);

        const bt = (sum, startIndex) => {
            if(sum === target) {
                res.push([...path]);
                return;
            }

            for(let i = startIndex; i < sorted.length && sum <= target; i++) {
                if(i > 0 && sorted[i - 1] === sorted[i] && used[i - 1] === false) {
                    continue;
                }
                sum += sorted[i];
                used[i] = true;
                path.push(sorted[i]);
                bt(sum, i + 1);
                sum -= sorted[i];
                used[i] = false;
                path.pop();
            }
        }

        bt(0, 0);

        return res;
    }
}
