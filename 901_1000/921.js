/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let remain = 0,
        balance = 0;
    for(let i = 0; i < S.length; i++){
        if(S[i] === '('){
            remain++;
        }
        else if(remain > 0){
            remain--;
        }
        else {
            balance++;
        }
    }
    return balance + remain;
};
