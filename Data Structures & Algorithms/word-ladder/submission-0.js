class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        // return when endWord not in wordList or equals to beginWord
        if(beginWord === endWord || !wordList.includes(endWord)) {
            return 0;
        }

        // Build a word pattern adjacency list by replacing each character with wildcard
        const neibour = {};
        wordList.push(beginWord);
        for(const word of wordList) {
            for(let i = 0; i < word.length; i++) {
                const pattern = word.substring(0, i) + "*" + word.substring(i+1);
                if(neibour[pattern] === undefined) {
                    neibour[pattern] = [];
                }
                neibour[pattern].push(word);
            }
        }

        // BFS to find the shortest path using queue
        const q = [];
        q.push(beginWord);
        let res = 1;
        // Do not visit previsious visited word
        const visit = new Set();

        while(q.length > 0) {
            const size = q.length;
            for(let i = 0; i < size; i++) {
                const word = q.shift();
                visit.add(word);

                if(word === endWord) {
                    return res;
                }

                for(let j = 0; j < word.length; j++) {
                    const pattern = word.substring(0, j) + "*" + word.substring(j+1);

                    for(const nei of neibour[pattern]) {
                        
                        // only push word with matching pattern to queue
                        if(!visit.has(nei)) {
                            q.push(nei);
                        }
                    }
                }
            }
            res++;
        }

        return 0;
    }
}
