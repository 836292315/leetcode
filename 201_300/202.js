var isHappy = function(n){
    var x = n,
        y = n;
    while(x>1){
        x = cal(x);
        if(x === 1) return true;
        y = cal(cal(y));
        if(y === 1) return true;
        if(x === y) return false;
    }
    return true;
    
    function cal(n){
        var s = n;
        var result = 0;
        while(s>0){
        result = result + (s%10)*(s%10);
        s = Math.floor(s/10);
        }
        return result;
    }
};