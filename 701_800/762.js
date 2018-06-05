var countPrimeSetBits = function(L, R) {
    let result = 0;
    for (let i = L; i <= R; i++) {
        /* my bad solution of counting the '1' of i
        let tem = i.toString(2);
        let count = 0;
        for (let j = 0; j < tem.length; j++) {
            if (tem[j] === '1') {
                count++;
            }
        }
        */
        let number = i,
            count = 0;
        while (number > 0) {
            count += (number & 1) === 1 ? 1 : 0;
            number = number >> 1;
        }
        if (count === 2 || count === 3) {
            result++;
        } else if (count !== 1 && count % 2 !== 0 && count % 3 !== 0) {
            result++;
        }
    }
    return result;
};