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

        let l = 0;
        let subMap = new Map();
        let have = 0;
        let need = tMap.size;
        
        console.log(need)
        for(let r = 0; r < s.length; r++){
            subMap.set(s[r], (subMap.get(s[r]) || 0) + 1);   

            if(tMap.has(s[r]) && tMap.get(s[r]) === subMap.get(s[r])) {
                have++;
            }

            while(have === need) {
                if(r - l + 1 < shortest) {
                    shortest = r - l + 1;
                    res = [l, r]
                }

                subMap.set(s[l], (subMap.get(s[l]) - 1));

                if(tMap.has(s[l]) && subMap.get(s[l]) < tMap.get(s[l])) {
                    have--;
                }

                l++;
            }
        }

        return shortest === Infinity ? '' : s.slice(res[0], res[1] + 1)
    }
}
