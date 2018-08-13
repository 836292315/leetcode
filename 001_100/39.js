/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    helper(result, candidates, [], target, 0);
    return result;

    function helper(result, candidates, tem, target, start) {
        if (target > 0) {
            for (let i = 0; i < candidates.length; i++) {
                tem.push(candidates[i]);
                helper(result, candidates, tem, target - candidates[i], i);
                tem.pop();
            }
        }
        if (target === 0) {
            result.push(tem.slice());
        }
    }
};