/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    this.w = [];
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
    this.w = [];
    for (var i = 0, len = dict.length; i < len; i++) {
        this.w.push(dict[i]);
    }
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
    let len = word.length;
    for (let i = 0; i < this.w.length; i++) {
        if (this.w[i].length === len && this.w[i] !== word) {
            let count = 0;
            for (let j = 0; j < len; j++) {
                if (this.w[i][j] !== word[j]) {
                    count++;
                }
            }
            if (count === 1) {
                return true;
            }
        }
    }
    return false;
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */