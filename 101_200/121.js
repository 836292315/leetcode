var maxProfit = function(prices) {
    var result = 0;
    if(prices.length === 0){
        return 0;
    }
    var buy = prices[0];
    for(var i = 1;i<prices.length;i++){
        if(buy<prices[i]){
            if(result<prices[i] - buy){
               result = prices[i] - buy;
               }
        }
        else{
            buy = prices[i];
        }
    }
    return result;
};