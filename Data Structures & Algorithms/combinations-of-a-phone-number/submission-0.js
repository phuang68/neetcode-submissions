class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const res = [];
        const digitMap = {
            '2': "abc",
            '3': "def",
            '4': "ghi",
            '5': "jkl",
            '6': "mno",
            '7': "pqrs",
            '8': "tuv",
            '9': "wxyz"
        };
        const path = [];

        const bt = (startIndex) => {
            if(startIndex === digits.length) {
               if(digits.length > 0){ 
                res.push(path.join(''));
                }
                return;
            }

            const charMap = digitMap[digits[startIndex]];

            for(let i = 0; i < charMap.length; i++) {
                path.push(charMap[i]);
                bt(startIndex + 1);
                path.pop();
            }
        }

        bt(0);

        return res;
    }
}
