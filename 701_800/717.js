var isOneBitCharacter = function(bits) {
     var ones = 0;
        //Starting from one but last, as last one is always 0.
        for (var i = bits.length - 2; i >= 0 && bits[i] != 0 ; i--) { 
            ones++;
        }
        if (ones % 2 > 0) return false; 
        return true;
};