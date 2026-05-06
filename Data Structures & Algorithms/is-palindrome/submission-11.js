class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphanumeric = (c) => {

            return (('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || ('0' <= c && c <= '9'));
        }

        let start = 0, end = s.length - 1;
    while (start < end) {
        while (start < end && !isAlphanumeric(s[start])) {
            start++;
        }
        while (start < end && !isAlphanumeric(s[end])) {
            end--;
        }

        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }
        start++;
        end--;
    }
    
    return true;
    }
}
