class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        const path = [];
        
        const isPalindrone = (string) => {
            let i = 0, j = string.length - 1;
            while(i <= j) {
                if(string[i] !== string[j]) return false;
                i++;
                j--;
            }
            return true;
        }

        const bt = (startIndex) => {
            if(startIndex >= s.length) {
                res.push([...path]);
                return;
            }

            for(let i = startIndex; i < s.length; i++) {
                let curSub = s.slice(startIndex, i + 1);
                if(isPalindrone(curSub)) {
                    path.push(curSub);
                    bt(i + 1);
                    path.pop();
                } else {
                    continue;
                }
            }
        }

        bt(0);

        return res;
    }
}
