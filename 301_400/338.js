var countBits = function(num) {
    var result = [];
    result[0] = 0;
    var pow = 1;
    for(var i = 1, t = 0; i <= num; i++,t++){
        if( i === pow){
            pow = 2 * pow;
            t = 0;
        }
        result[i] = result[t] + 1;
    } 
    return result;
};