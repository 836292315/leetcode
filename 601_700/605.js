var canPlaceFlowers = function(flowerbed, n) {
    var count = 1;
    var result = 0;
    for(var i=0; i<flowerbed.length; i++) {
        if(flowerbed[i] === 0) {
            count++;
        }else {
            result += (count-1)/2;
            result = Math.floor(result);
            count = 0;
        }
    }
    if(count != 0) {
        result += count/2;
        result = Math.floor(result);
    }
    return result>=n;
};