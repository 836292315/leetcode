/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    let res = -1,
        cnt = 0;
    for (let i = 0; i < this.nums.length; i++) {
        if (this.nums[i] !== target) continue;
        cnt++;
        let temp = Math.floor(Math.random() * cnt);
        if (temp === 0) {
            res = i;
        }
    }
    return res;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.pick(target)
 */