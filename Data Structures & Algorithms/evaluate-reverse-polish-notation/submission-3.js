class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for(let c of tokens) {
            if(isNaN(parseInt(c))) {
                if(c === '+') {
                    let operand2 = stack.pop();
                    let operand1 = stack.pop();
                    stack.push(operand1 + operand2);
                } else if (c === '-') {
                    let operand2 = stack.pop();
                    let operand1 = stack.pop();
                    stack.push(operand1 - operand2);
                } else if (c === '*') {
                    let operand2 = stack.pop();
                    let operand1 = stack.pop();
                    stack.push(operand1 * operand2);
                } else if(c === '/') {
                    let operand2 = stack.pop();
                    let operand1 = stack.pop();
                    let div = operand1 / operand2;
                    stack.push(div > 0 ? Math.floor(div) : Math.ceil(div));
                }
                console.log(stack[stack.length - 1])
            } else {
                stack.push(parseInt(c));
            }
        }
        return stack.pop();
    }
}
