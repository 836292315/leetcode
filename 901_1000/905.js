/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let res = [];
    for(let i = 0; i < A.length; i++){
        if(A[i] % 2 !== 0){
            res.push(A[i]);
        }
        else{
            res.unshift(A[i]);
        }
    }
    return res;
};