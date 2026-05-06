class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0, r = height.length - 1;

        let maxL = height[l];
        let maxR = height[r];
        let trap = 0;

        while(l < r) {
            if(maxL < maxR) {
                l++;
                maxL = Math.max(height[l], maxL);
                trap += maxL - height[l];
            } else {
                r--;
                maxR = Math.max(height[r], maxR);
                trap += maxR - height[r];
            }
        }

        return trap;
    }
}
