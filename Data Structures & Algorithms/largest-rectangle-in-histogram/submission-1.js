class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = -Infinity;
        let monoIncrStack = [];

        for(let i = 0; i < heights.length; i++) {
           let start = i;
               
            while(monoIncrStack.length > 0 && monoIncrStack[monoIncrStack.length - 1][0] > heights[i]){
                let [height, index] = monoIncrStack.pop();
                let area = (i - index) * height;
                start = index;
                max = Math.max(area, max);
            }
               
            monoIncrStack.push([heights[i], start]);

            console.log(monoIncrStack)
        }

        while(monoIncrStack.length > 0) {
            let [height, index] = monoIncrStack.pop();
            let area = (heights.length - index) * height;
            max = Math.max(area, max);
        }

        return max;
    }
}
