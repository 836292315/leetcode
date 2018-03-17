var rotatedDigits = function(N) {
    var count = 0;
    for(var i = 1; i <= N; i++) {
        if (i.toString().match("^([018]*[2569]+[018]*)+$"))
            count++;
    }
    return count;
};
 
    