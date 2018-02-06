var findMaxConsecutiveOnes = function(nums) {
    var sum = 0,max = 0;
    for(var i = 0;i<nums.length;i++){
        sum+=nums[i];
        if(nums[i] === 0){
            sum = 0;
        }
        else{
            max = Math.max(sum,max);
        }
    }
    return max;
};