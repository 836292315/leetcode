/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    let r=M.length;
    let c =M[0].length;
    let arr = new Array();         
       for(let i=0;i<r;i++){          
          arr[i]=new Array();    
          for(let j=0;j<c;j++){      
             arr[i][j]=0;
          }
       }
           
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            let count = 0;
            for (let rr = i - 1; rr <= i + 1; rr++) {
                for (let cc = j - 1; cc <= j + 1; cc++) {
                    if (rr >= 0 && rr < r && cc >= 0 && cc < c) {
                        arr[i][j] += M[rr][cc];
                        count++;
                    }
                }

            }
            arr[i][j] = Math.floor(arr[i][j] / count);
        }
    }
    return arr;
};