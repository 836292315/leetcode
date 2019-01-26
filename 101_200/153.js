/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let lo = 0;
    let hi = nums.length - 1;
    while(lo < hi){
        let mid = lo + Math.floor((hi - lo)/2);
        if(nums[mid] > nums[hi]){
            lo = mid + 1;
        }
        else{
            hi = mid;
        }
    }
    return nums[lo];
};
