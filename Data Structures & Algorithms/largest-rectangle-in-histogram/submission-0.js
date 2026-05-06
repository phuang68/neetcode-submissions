class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = -Infinity;

        for(let i = 0; i < heights.length; i++) {
            let min = heights[i];
            for(let j = i; j < heights.length; j++) {
                min = Math.min(heights[j], min);
                max = Math.max(max, (j - i + 1) * min);
            }
        }

        return max;
    }
}
