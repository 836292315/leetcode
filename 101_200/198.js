var rob = function(nums) {
    var a = 0,
        b = 0,
        len = nums.length;
    for(var i = 0; i < len; i++){
        if( i % 2 === 0){
            a = Math.max(b, a+nums[i]);
        }
        else{
            b = Math.max(a, b+nums[i]);
        }
    }
    return Math.max(a, b);
};
