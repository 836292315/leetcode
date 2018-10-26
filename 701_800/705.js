/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
    this.mySet = Array.from({
        length: 1000
    }, x => []);
    this.mapFn = function (num) {
        return num % 1000;
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    let mapValue = this.mapFn(key);
    let arr = this.mySet[mapValue],
        index = arr.indexOf(key);
    if (index === -1) arr.push(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    let mapValue = this.mapFn(key);
    let arr = this.mySet[mapValue],
        index = arr.indexOf(key);
    if (index !== -1) arr.splice(index, 1);
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    let mapValue = this.mapFn(key);
    let arr = this.mySet[mapValue],
        index = arr.indexOf(key);
    return index !== -1;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */