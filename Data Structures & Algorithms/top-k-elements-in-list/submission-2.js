class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        
        // Count freq
        for(const num of nums){
            if(count.has(num)) {
                const freq = count.get(num) + 1;
                count.set(num, freq);
            } else {
                count.set(num, 1);
            }
        }

        // Bucket sort based on freq
        const bucket = Array.from({length: nums.length + 1}, () => []);

        console.log(bucket)
        
        for(const [num, freq] of count){
            bucket[freq].push(num);
        }

        // Get result from most freq
        const res = [];
        for(let i = bucket.length - 1; i > 0; i--){
            for(let j = 0; j < bucket[i].length; j++){
                res.push(bucket[i][j]);

                if( res.length === k) {
                    return res;
                }
            }
        }
        
    }
}
