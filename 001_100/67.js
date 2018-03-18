var addBinary = function(a, b) {
    var i = a.length-1,
        j = b.length-1,
        c = 0,
        result = '';
    while(i >= 0 || j >= 0|| c === 1){
        c += i >= 0 ? parseInt(a[i--]) : 0 ; 
        c += j >= 0 ? parseInt(b[j--]) : 0 ;
        result = (c % 2) + result;
        c = parseInt(c / 2);
    }
    return result;
};