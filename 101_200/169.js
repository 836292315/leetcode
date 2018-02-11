var majorityElement = function(nums) {
    nums.sort();
    var index=Math.floor((nums.length-1)/2);
    return nums[index];
    
  };