var dominantIndex = function(nums) {
    var first_max = 0;
    var second_max = 0;
    var index = 0;
    for(var i = 0; i<nums.length;i++){
        if(first_max<nums[i]){
            second_max = first_max;
            first_max = nums[i];
            index = i;
        }
        else if(second_max<nums[i]){
            second_max = nums[i];
        }
    }
    return (first_max)>=2*(second_max)? index:-1;
};