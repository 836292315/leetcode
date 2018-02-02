var countAndSay = function(n) {
    var start = '1',
        result = '',
        count = 1;
    for(var i = 0; i < n-1;i++){
        for(var j = 0; j < start.length;j++){
            if(start[j] !== start[j+1] || j ===start.length){
                result += count +start[j];
                count = 1;
            }
            else{
                count += 1;
            }
        }
        start = result;
        result = '';
    }
    return start;
};