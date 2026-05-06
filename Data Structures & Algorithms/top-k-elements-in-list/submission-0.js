class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      const numFreq = {};
    const numSet = new Set();
    for (const num of nums) {
        numFreq[num] = (numFreq[num] || 0) + 1;
        numSet.add(num);
    }
    console.log(Array.from(numSet));
    const sortedNums = Array.from(numSet).sort((a, b) => numFreq[b] - numFreq[a])
    const res = sortedNums.slice(0, k);
    return res;
    }
}
