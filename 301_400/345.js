var reverseVowels = function(s){
	if(s === null || s.length === 0){
		return s;
	}
	var s_array = s.split('');
	var low = 0,
		high = s.length - 1,
		vowels = "aeiouAEIOU",
		temp;
		
	while(low < high){
		while(low < high && vowels.indexOf(s_array[low])=== -1){
			low++;
		} 
		while(low < high && vowels.indexOf(s_array[high]) === -1){
			high--;
		} 
		
		tem = s_array[low];
		s_array[low] = s_array[high];
		s_array[high] = tem;
		low++;
		high--;
	}
	return s_array.join('');
};