class Solution {
    isAlphanumeric(char) {
    return (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9');
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0, end = s.length - 1;
    while (start < end) {
        while (start < end && !this.isAlphanumeric(s[start])) {
            start++;
        }
        while (start < end && !this.isAlphanumeric(s[end])) {
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
