class Solution:
    def checkValidString(self, s: str) -> bool:
        leftStack = []
        starStack = []

        for i, c in enumerate(s):
            if c == '(':
                leftStack.append(i);
            if c == '*':
                starStack.append(i);
            # whenever we find ) we pair it with ( first then * as (
            if c == ')':
                if not leftStack and not starStack:
                    return False;
                if leftStack:
                    leftStack.pop()
                else:
                    starStack.pop()

        # make sure all left parenthesis are paired with * as )
        while len(leftStack) > 0 and len(starStack) > 0:
            leftIdx = leftStack.pop();
            starIdx = starStack.pop();
            if leftIdx > starIdx:
                return False;

        # if there are still ( not paired then it's invalid
        return len(leftStack) == 0;
