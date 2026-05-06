class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let res = [-1, -1];
        let shortest = Infinity; 
        // Check length of s > of t
        if(s.length < t.length){
            return '';
        }

        let tMap = new Map();
        for(let c of t) {
            tMap.set(c, (tMap.get(c) || 0) + 1)
        }
        
        for(let i = 0; i < s.length; i++){
            let subMap = new Map();
            for(let j = i; j < s.length; j++) {
                subMap.set(s[j], (subMap.get(s[j]) || 0) + 1);

                let match = true;
                for(let c of tMap.keys()) {
                    if((subMap.get(c) || 0) < tMap.get(c)){
                        match = false;
                        break;
                    }
                }

                // Update result
                if(match && j - i + 1 < shortest) {
                    shortest = j - i + 1;
                    res = [i, j]
                }
            }
        }

        return shortest === Infinity ? '' : s.slice(res[0], res[1] + 1)
    }
}
