/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    /*
    for(let i = 0; i < nums.length - 1; i += 2){
        if(nums[i] !== nums[i + 1]){
            return nums[i];
        }
    }
    */
    let left = 0,
        right = nums.length - 1;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1])
            return nums[mid];
        else if (nums[mid] === nums[mid + 1] && mid % 2 === 0)
            left = mid + 1;
        else if (nums[mid] === nums[mid - 1] && mid % 2 === 1)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return nums[left];
};