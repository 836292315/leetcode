var validPalindrome = function(s) {
    var low = 0,
        high = s.length-1;
        while(low < high){
            if(s.charAt(low) === s.charAt(high)){
                low++;
                high--;
            }
            else{
                return isPalindrome(s,low+1,high) || isPalindrome(s,low,high-1);
            }
        }
       return true;
    
	function isPalindrome( s, low,high){
        while(low<high){
            if(s.charAt(low) === s.charAt(high)){
                low++;
                high--;
            }
            else
                return false;
        }
        return true;
    }
};
