/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function (input) {
    let list = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "+" ||
            input[i] === "-" ||
            input[i] === "*") {
            let operator = input[i];
            let leftPart = input.substring(0, i);
            let rightPart = input.substring(i + 1);

            let leftPartList = diffWaysToCompute(leftPart);
            let rightPartList = diffWaysToCompute(rightPart);

            let res;
            for (let left of leftPartList) {
                for (let right of rightPartList) {
                    switch (operator) {
                        case "+":
                            res = left + right;
                            break;
                        case "-":
                            res = left - right;
                            break;
                        case "*":
                            res = left * right;
                            break;
                    }
                    list.push(res);
                }
            }
        }
    }
    if (list.length === 0) {
        list.push(parseInt(input));
    }

    return list;
};