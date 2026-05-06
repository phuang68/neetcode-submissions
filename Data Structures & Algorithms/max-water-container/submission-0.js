class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;

        let l = 0;
        let r = heights.length - 1;

        while(l < r) {
            let minHeight = Math.min(heights[l], heights[r]);
            let area = (r - l) * minHeight;
            max = Math.max(area, max);
            if(heights[l] < heights[r]) {
                l++;
            } else if(heights[l] > heights[r]) {
                r--;
            } else {
                l++;
            }
        }

        return max;
    }
}
