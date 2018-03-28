var addStrings = function(num1, num2) {
    var i = num1.length-1,
        j = num2.length-1,
        carry = 0,
        result = '';
    while(i>=0 ||j>=0){
        if(i>=0){
            carry += num1[i]-'0';
            i--;
        }
        if(j>=0){
            carry += num2[j] -'0';
            j--;
        }
        result = (carry%10).toString() + result;
        carry = Math.floor(carry/10);
    }
    return carry != 0? '1' + result : result;
};