var maximumProduct = function(nums) {
    function compare(value1,value2){
    return value1-value2;
 }
    
 var l = nums.length;
 var new_nums = nums.sort(compare);
 var a = new_nums[0] * new_nums[1] * new_nums[l-1];
 var b = new_nums[l-1] * new_nums[l-2] * new_nums[l-3];
    
 return Math.max(a,b);
};