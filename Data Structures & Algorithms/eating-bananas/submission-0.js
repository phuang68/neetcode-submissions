class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while(l <= r) {
            let speed = Math.floor((l + r) / 2);

            let totalTime = 0;

            for(const pile of piles) {
                totalTime += Math.ceil((pile / speed));
            }

            if(totalTime > h) {
                l = speed + 1;
            } else {
                res = speed;
                r = speed - 1;
            }
        }

        return res;
    }
}
