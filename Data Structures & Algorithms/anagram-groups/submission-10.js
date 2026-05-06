class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    

    groupAnagrams(strs) {
        const map = new Map(); // key: sKey, val: array of strings

        const transformToKey = (str) => {
        const startCode = 'a'.charCodeAt(0);
        
        const charArr = new Array(26).fill(0);

        for(let i = 0; i < str.length; i++){
            const pos = str.charCodeAt(i) - startCode;
            charArr[pos] += 1;
        }

        const res = new Array();

        for(let i = 0; i < charArr.length; i++){
            if(charArr[i] > 0) { res.push(String.fromCharCode(startCode + i) + charArr[i]);}
        }
        
        return res.join('');
       }
       
        for(const str of strs){
            const sKey = transformToKey(str);
            if(map.has(sKey)) {
                map.get(sKey).push(str);
            } else {
                map.set(sKey, [str]);
            }
        }
        
        return Array.from(map.values())
    }
}
