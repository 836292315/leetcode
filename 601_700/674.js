var findLengthOfLCIS = function(nums) {
    var result = 0;
    var index = 0;
    for(var i=0;i<nums.length;i++){
        if(i === 0 ||nums[i-1]<nums[i]){
            result = Math.max(result,++index)
        }
        else{
           index = 1;
           }
    }
    return result;
}