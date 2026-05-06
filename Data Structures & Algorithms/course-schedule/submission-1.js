class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // Set up a grpah
        const preMap = new Map();
        for(let i = 0; i < numCourses; i++) {
            preMap.set(i, []);
        }
        for(let [course, prereq] of prerequisites) {
            preMap.get(course).push(prereq);
        }

        // A set to detect cycle during dfs
        const path = new Set();

        // dfs - traverse if course has an end
        const dfs = (course) => {
            if(path.has(course)) return false;

            if(preMap.get(course).length === 0) return true;

            path.add(course);

            for(let pre of preMap.get(course)) {
                if(!dfs(pre)) {
                    return false;
                }
            }

            path.delete(course);
            preMap.set(course, []);

            return true;
        }
        // Check each course
        for(let c = 0; c < numCourses; c++) {
            if(!dfs(c)) {
                return false;
            }
        }

        return true;
    }
}
