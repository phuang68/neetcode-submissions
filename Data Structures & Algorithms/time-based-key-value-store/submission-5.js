class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        } 
        this.keyStore.get(key).push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore.get(key) || [];
        const res = this.binary_search(arr, timestamp);
        return res === -1 ? "" : arr[res][0];
    }

    binary_search(array, target) {
        let l = 0;
        let r = array.length - 1;
        let res = -1;

        while(l <= r) {
            let m = Math.floor((l + r) / 2);

            if(array[m][1] <= target) {
                res = m;
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return res;
    }
}
