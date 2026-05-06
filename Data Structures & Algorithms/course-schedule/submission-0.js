class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = new Map();
        for(let i = 0; i < numCourses; i++) {
            preMap.set(i, []);
        }
        for(let [cur, pre] of prerequisites) {
            preMap.get(cur).push(pre);
        }

        // Store all courses along the current dfs path
        const visiting = new Set();

        const dfs = (cur) => {
            if(visiting.has(cur)) {
                return false;
            }

            if(preMap.get(cur).length === 0) {
                return true;
            }

            visiting.add(cur);

            for(let pre of preMap.get(cur)) {
                if(!dfs(pre)) {
                    return false;
                }
            }
            visiting.delete(cur);
            preMap.set(cur, []);
            return true;
        }

        for(let c = 0; c < numCourses; c++) {
            if(!dfs(c)) {
                return false;
            }
        }
        return true;
    }
}
