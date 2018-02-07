var findPairs = function(nums, k) {
    function compare(a,b){
        return a-b;
    }
    nums.sort(compare);
    var left  = 0, 
        right = 1,
        count = 0;
    while (left <= right && right < nums.length) {
        if (nums[right] - nums[left] < k) {
            right++;
        } else if (nums[right] - nums[left] > k) {
            left++;
        } else {
            count++;
            right++;
            while (right < nums.length && nums[right - 1] === nums[right]) {
                right++;
            }
            while (left <  nums.length - 1 && nums[left + 1] === nums[left]) {
                left++;
            }
        }
        if (left === right) {
            right++;
        }
    }
    return count;
};