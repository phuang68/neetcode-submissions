class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = [];

        for(let i = 0; i < temperatures.length; i++) {
            let cur = temperatures[i];
            let j =  i + 1;
            while(j < temperatures.length) {
                if(temperatures[j] > cur){
                    break;
                }
                j++;
            }
            if(j === temperatures.length) {
                res.push(0);
            } else {
                res.push(j - i);
            }
        }

        return res;

    }
}
