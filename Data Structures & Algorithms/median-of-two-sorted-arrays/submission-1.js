class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let i = 0, j = 0;
        let median1 = 0, median2= 0;
        let len1 = nums1.length, len2 = nums2.length;
        
        for(let count = 0; count <  Math.floor((len1 + len2) / 2) + 1; count++) {
            median2 = median1;
            if(i < len1 && j < len2) {
                if(nums2[j] < nums1[i]) {
                    median1 = nums2[j];
                    j++;
                } else {
                    median1 = nums1[i];
                    i++;
                }
            } else if(i < len1) {
                median1 = nums1[i];
                i++;
            } else if(j < len2) {
                median1 = nums2[j];
                j++;
            }
        }

        if((len1 + len2) % 2 === 0) {
            return (median1 + median2) / 2;
        } else {
            return median1;
        }
    }
}
