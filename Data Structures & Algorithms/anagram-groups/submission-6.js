class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = {};
        for (const str of strs) {
            const charArr = new Array(26).fill(0);
            for (const char of str) {
                const charDiff = char.charCodeAt(0) - 'a'.charCodeAt(0);
                charArr[charDiff] = charArr[charDiff] + 1;
            }
            const keyStr = charArr.join(',');
            if(!strMap[keyStr]){
                strMap[keyStr] = [];
            }
            strMap[keyStr].push(str);
        }
        
        return Object.values(strMap);
    }
}
