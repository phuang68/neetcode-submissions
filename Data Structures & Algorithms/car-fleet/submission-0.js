class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = [];

        for(let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
        }

        const sortedCars = cars.sort((a, b) => a[0] - b[0]);

        console.log(sortedCars)
        const stack = [];

        for(let i = sortedCars.length - 1; i >= 0; i--) {
            let t = (target - sortedCars[i][0]) / sortedCars[i][1];
            stack.push(t);

            if(stack.length >= 2) {
                let cur = stack.pop();
                let prev = stack.pop();

                if(cur > prev) {
                    stack.push(prev);
                    stack.push(cur);
                } else {
                    stack.push(prev);
                }
            }
        }

        return stack.length;
    }
}
