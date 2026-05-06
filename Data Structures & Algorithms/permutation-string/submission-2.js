class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) {
            return false;
        }

        // Initial window
        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        for(let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        // Check inital matches
        let matches = 0;
        for(let i = 0; i < 26; i++){
            if(s1Count[i] === s2Count[i]) {
                matches++;
            }
        }

        // Check sliding window
        for(let i = s1.length; i < s2.length; i++) {
            if(matches === 26) {
                return true;
            }

        // Check window end
        let index = s2.charCodeAt(i) - 'a'.charCodeAt(0);
        s2Count[index]++;
        if(s1Count[index] === s2Count[index]) {
            matches++;
        } else if (s1Count[index] + 1 === s2Count[index]) {
            matches--;
        }

        // Update window start
        let preIndex =  s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0);
        s2Count[preIndex]--;
        if(s1Count[preIndex] === s2Count[preIndex]) {
            matches++;
        } else if(s1Count[preIndex] - 1 === s2Count[preIndex]){
            matches--;
        }
        }
        return matches === 26;
    }
}
