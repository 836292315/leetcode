/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.map[key] = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let res = 0;
    let map = this.map;
    for (let el in map) {
        if (el.indexOf(prefix) === 0) {
            res += map[el];
        }
    }
    return res;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */