/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let arr = [];
    for (let i = 0; i < pushed.length; i++) {
        arr.push(pushed[i]);
        while (arr.length !== 0 && arr[arr.length - 1] === popped[0]) {
            arr.pop();
            popped.shift();
        }
    }
    return arr.length === 0;
};
