var pivotIndex = function(nums) {
    var sum = 0;
    for(var i = 0;i<nums.length;i++){
        sum = sum +nums[i];
    }
    var half = 0;
    for(var i =0;i<nums.length;i++){
        if(sum-nums[i]==2*half){
            return i;
        }
        half = half+nums[i];
    }
    return -1;
};