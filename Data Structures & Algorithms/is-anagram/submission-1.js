class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
      
        const startCode = 'a'.charCodeAt(0);

        const sCharArr = new Array(26).fill(0);
    
        for(let i = 0; i < s.length; i++){
            let charCode = s.charCodeAt(i) - startCode;
            sCharArr[charCode] += 1;
        }

        const tCharArr = new Array(26).fill(0);
    
        for(let i = 0; i < t.length; i++){
            let charCode = t.charCodeAt(i) - startCode;
            tCharArr[charCode] += 1;
        }

        for(let i = 0; i < 26; i++){
            if(sCharArr[i] !== tCharArr[i]) return false;
        }

        return true;
    }
}
