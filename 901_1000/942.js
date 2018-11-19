/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let res = [];
    let lo = 0,
        hi = S.length;
    for(let i = 0; i <= S.length; i++){
        if(S[i] === 'I'){
            res.push(lo);
            lo++;
        }
        else{
            res.push(hi);
            hi--;
        }
    }
    return res;
};
