var maxSubArray = function(nums) {
    var sum = 0;
    var result = nums[0];
    for(var i=0;i<nums.length;i++ ){
        sum = sum +nums[i];
        result = Math.max(result,sum);
        sum = Math.max(sum,0);
    }
    return result;
};