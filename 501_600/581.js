var findUnsortedSubarray = function(nums) {
    function compare(val1,val2){
        return val1-val2;
    }
    var new_nums = nums.concat();
    new_nums = new_nums.sort(compare);
    var start =0;
    for(var i = 0;i<nums.length;i++){
        if(new_nums[i] !== nums[i]){
            start = i;
            break;
        }
    }
    var end =0;
    for(var j = nums.length-1;j>=0;j--){
        if(new_nums[j] !== nums[j]){
            end = j+1;
            
            break;
        }
    }
    return end-start;
};