var checkRecord = function(s) {
    var a = 0,
        l = 0;
    for(var i = 0;i<s.length;i++) {
        if(s[i] === 'A') a++;
        if(s[i] === 'L') l++;
        else l = 0;
        if(a>=2||l>2) return false;
    }
    return true;
};