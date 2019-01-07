/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 *refer to https://leetcode.com/problems/task-scheduler/discuss/104496/concise-Java-Solution-O(N)-time-O(26)-space
 */
var leastInterval = function(tasks, n) {
    let arr = new Array(26).fill(0);
    for (let task of tasks) {
        arr[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    arr.sort((a, b) => a - b);
    let i = 25;
    while (i >= 0 && arr[i] === arr[25]) i--;
    return Math.max(tasks.length, (arr[25] - 1) * (n + 1) + 25 - i);
};
