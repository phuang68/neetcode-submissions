class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for(let c of s) {
            if(c === '{') {stack.push('}');}
            else if (c === '[') {stack.push(']');}
            else if (c === '(') {stack.push(')');}
            else if (stack.length === 0 || c !== stack[stack.length - 1])  {return false;}
            else { stack.pop(); }
        }
        return stack.length === 0;
    }
}
