class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      const freq = {};
    const freqBucket = Array.from({length: nums.length + 1}, () => []);

    // Get freq of each num
    for (const num of nums) {
        freq[num] = ( freq[num] || 0 ) + 1
    }

    for (const f in freq) {
        freqBucket[freq[f]].push(parseInt(f))
    }

    const res = [];
    for (let i = freqBucket.length - 1; i > 0; i--) {
        for (let j = 0; j < freqBucket[i].length; j++) {
            res.push(freqBucket[i][j]);
            if (res.length === k) {
                return res;
            }

        }
    }
    }
}
