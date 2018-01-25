var findMaxAverage = function(nums, k) {
    var sum = 0;
	var sum1 =0;
    for(var p = 0;p<k;p++){
        sum1=sum1 + nums[p];
    }
    var max = sum1;
    for(var i = 1;i<=nums.length-k;i++){
        for(var j= i;j<i+k;j++){
            sum= sum + nums[j];
           
        }
        max =Math.max(max,sum);
        sum = 0;
    }
    return max/k;
};