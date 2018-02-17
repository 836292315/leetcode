var containsNearbyDuplicate = function(nums, k) {
    if(nums === undefined || nums.length<=0 || k<1 ) return false;
	var table = {};
	for(var i=0; i<nums.length; i++){
	    // update map value each time encounter a duplicate 
	    // if the new duplicate index distance <= k we find the target and return true;
		if(table[nums[i]]!==undefined && (i - table[nums[i]])<=k && (i - table[nums[i]])!==0) return true;
		table[nums[i]] = i;
	}
	return false;
};