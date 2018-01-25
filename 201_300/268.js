var missingNumber = function(nums) {
    var sum = 0;
    var all = 0;
    for(var i = 0;i<nums.length;i++){
        sum+=nums[i];
    }
    for(var j = 0;j<=nums.length;j++){
        all+=j;
    }
    return all-sum;
};