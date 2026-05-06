class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        // Graph and indegree to capture the DAG
        const graph = new Array(numCourses).fill(0).map(() => []);
        const indegree = new Array(numCourses).fill(0);
        for(const [course, pre] of prerequisites) {
            indegree[pre]++;
            graph[course].push(pre);
        }

        // Take courses not a prereq to any courses
        const q = [];
        for(let i = 0; i < numCourses; i++) {
            if(indegree[i] === 0) {
                q.push(i);
            }
        }

        // Path to track
        const path = [];


        // Take all the courses available
        while(q.length > 0) {
            const course = q.shift();
            path.push(course);

            for(let prereq of graph[course]) {
                indegree[prereq]--;

                if(indegree[prereq] === 0) {
                    q.push(prereq);
                }
            }
        }

        return path.length !== numCourses ? [] : path.reverse();
    }
}
