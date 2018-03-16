var reverseStr = function(s, k) {
    if(s.length <= k){
        return s.split('').reverse().join('');
    }
    var result = '';
    for(var i = 0; i < s.length; i=i+2*k){
        result += s.split('').slice(i,i+k).reverse().join('');
        result += s.slice(i+k,i+2*k);
    }
    return result;
};
