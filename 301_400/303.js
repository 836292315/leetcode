var NumArray = function(nums) {
     this.sums = [];
      var sum = 0;
    for(var i = 0; i < nums.length;i++){
        sum += nums[i];
        this.sums.push(sum);
    }
};
/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    //return this.sums[j] - (i > 0 ? this.sums[i-1] :0);
    if(i === 0){
        return this.sums[j];
    }
    return this.sums[j] - this.sums[i-1];
};
