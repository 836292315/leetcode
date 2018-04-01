var findErrorNums = function(nums) {
   var result = [];
    for(var i=0;i<nums.length;i++){
        var index = Math.abs(nums[i])-1;
        if(nums[index]>0){
            nums[index] = -nums[index];
        }
        else{
            result[0] = index+1;
        }
    }
    for(var j=0;j<nums.length;j++){
        if(nums[j]>0){
            result[1] = j+1;
        }
    }
    return result;
};