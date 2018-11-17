/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let n = A.length;
    for(let i = 0, j = 1; i < n; i += 2){
        while(j < n && A[j] % 2 === 1){
            j += 2;
        }
        if(A[i] % 2 === 1){
            let tem = A[i];
            A[i] = A[j];
            A[j] = tem;
            j += 2;
        }
    }
    return A;
};
