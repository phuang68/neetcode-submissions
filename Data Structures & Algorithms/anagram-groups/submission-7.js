class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = new Map();
        const res = [];
        for (const str of strs) {
            const charArr = new Array(26).fill(0);
            for (const char of str) {
                const charDiff = char.charCodeAt(0) - 'a'.charCodeAt(0);
                charArr[charDiff] = charArr[charDiff] + 1;
            }
            const newStr = charArr.join(',');
            if(strMap.get(newStr)) {
              const strArr = strMap.get(newStr);
              strArr.push(str);
              strMap.set(newStr, strArr);
            } else {
               strMap.set(newStr, [str]);
            }
            
        }
        
        for(const strArr of strMap.values()) {
            res.push(strArr)
        }
        
        return res;
    }
}
