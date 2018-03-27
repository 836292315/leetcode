/*
var minMoves = function(nums) {
    var minNum = nums[0],
        len = nums.length,
        sum = 0;
    for(var i = 0; i < len; i++){
        minNum = Math.min(minNum,nums[i]);
        sum =sum + nums[i];
    }
    return sum - len*minNum;
};
*/
var minMoves = function(nums) {
    var sum = 0,
        minNum = nums[0],
        len = nums.length;
    for(var i = 1; i < len; i++){
        minNum = Math.min(minNum,nums[i]);
    }
    for(var j = 0; j < len; j++){
        sum = sum + nums[j]-minNum;
    }
    return sum;
};