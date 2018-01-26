var removeDuplicates = function(nums) {
    var len = nums.length;
    if(len < 2){
        return len;
    }
    var index = 1;
    for(var i = 1;i<len;i++){
        if(nums[i] !== nums[i-1]){
            nums[index++] = nums[i];
        }
    }
    return index;
};
/*
var removeDuplicates = function(nums){
     nums = Array.from(new Set(nums));
    return nums.length;
};
    

var removeDuplicates = function(nums){
    for(var i = nums.length-1;i>=0;i--){
        if(nums[i] ===nums[i-1] ){
            nums.splice(i,1);
        }
    }
    return nums.length;
};


var removeDuplicates = function(nums){
    for(var i = 0;i<nums.length;i++){
        if(nums[i] ===nums[i+1] ){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
    
};
*/