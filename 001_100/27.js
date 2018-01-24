/* method 1
var removeElement = function(nums, val) {   
   for(var i = nums.length - 1; i >= 0; i--){
       if (nums[i] === val) {
            nums.splice(i, 1);
       }
   }
   return nums.length;
};
*/
var removeElement = function(nums, val) {
	var m = 0;    
	for(var i = 0; i <nums.length; i++){
        if(nums[i] !== val){
            nums[m] = nums[i];
            m++;
        }
	}
	return m;
};