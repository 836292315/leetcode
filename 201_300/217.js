var containsDuplicate = function(nums) {
     if (nums.length === 0){
        return false;
    }
    nums.sort();
    for(var i = 0;i<nums.length-1;++i){
        if(nums[i] === nums[i+1]){
            return true;
        }
    }
     return false;
};
