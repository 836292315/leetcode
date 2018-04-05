var isPerfectSquare = function(num) {
    for (var i = 1; 0 < num; i = i + 2) {
        num = num - i;
        console.log(num);
    }
    return num === 0;
};
console.log(isPerfectSquare(9));