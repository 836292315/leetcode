var checkPossibility = function(nums) {
    var index = 0;
    for(var i = 1;i<nums.length;i++){
        if(nums[i]<nums[i-1]){
            index++;
            if(index>1){
                return false;
            }
            if(i-2<0 || nums[i-2] <= nums[i]){
               nums[i-1] = nums[i];
               }
            else{
                nums[i] = nums[i-1];
            }
        }
    }
    return true;
};