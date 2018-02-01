var matrixReshape = function(nums, r, c) {
    if (nums.length * nums[0].length !==  r * c) {
        return nums;
    }
    let newAry = [[]];
    let row = 0, column = 0;
    for(let i = 0; i < nums.length; i++) {
       for (let j = 0; j < nums[i].length; j++) {
            if (column >= c) {
                column = 0;
                row++;
                newAry.push([]);
            }
           newAry[row][column++] = nums[i][j];
        }
   }
    return newAry;
};