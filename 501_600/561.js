var arrayPairSum = function(nums) {
    function compare(value1,value2){
       return value1-value2;
    }
    var sum = 0;
    nums.sort(compare);
    for(var i=0;i<nums.length;i=i+2){
        sum = sum+nums[i];
    }
    return sum;
};