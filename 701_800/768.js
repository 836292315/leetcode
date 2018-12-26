/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    /*
    let res = 0;
    let array = arr.slice(0); 
    array.sort((a, b) => a - b);
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0;i < arr.length; i++){
        sum1 += array[i];
        sum2 += arr[i];
        if(sum1 === sum2) res++;
    }
    return res;
    */
    
    let len = arr.length;

    let maxOfLeft = [];
    maxOfLeft[0] = arr[0];
    for (let i = 1; i < len; i++) {
        maxOfLeft[i] = Math.max(maxOfLeft[i - 1], arr[i]);
    }

    let minOfRight = [];
    minOfRight[len - 1] = arr[len - 1];
    for (let i = len - 2; i >= 0; i--) {
        minOfRight[i] = Math.min(minOfRight[i + 1], arr[i]);
    }

    let res = 1;
    for (let i = 0; i < len - 1; i++) {
        if (maxOfLeft[i] <= minOfRight[i + 1]) {
            res++;
        }
    }
    return res;
};
