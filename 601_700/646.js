/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    let sortPairs = pairs.sort((a,b) =>{
        return a[1] - b[1];
    });
    let length = 1;
    let end = sortPairs[0][1];
    for(let i = 1 ; i < sortPairs.length; i++){
        if(end < sortPairs[i][0]){
            length++;
            end = sortPairs[i][1];
        }
    }
    return length;
};