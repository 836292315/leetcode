var findDisappearedNumbers = function(nums) {
    var val ;
    var result = [];
    for(var i = 0;i<nums.length;i++){
        //val = Math.abs(nums[i])-1;
        val = nums[i]-1;
        if(nums[val]>0){
            nums[val] = -nums[val];
        }
    }
    for(var i =0;i<nums.length;i++){
        if(nums[i]>0){
            result.push(i+1);
        }
    } 
    return result;
};