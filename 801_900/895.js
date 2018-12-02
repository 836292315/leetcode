
var FreqStack = function () {
    this.frq_arr = [];
    this.list_arr = [];
    this.Max = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function (x) {
    if (!this.list_arr[x])
        this.list_arr[x] = 1;
    else
        this.list_arr[x]++;

    let f = this.list_arr[x];

    if (f > this.Max)
        this.Max = f;


    if (!this.frq_arr[f])
        this.frq_arr[f] = [];

    this.frq_arr[f].push(x);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
    let MaxFa = this.frq_arr[this.Max].pop();

    this.list_arr[MaxFa]--;

    if (this.frq_arr[this.Max].length === 0)
        this.Max--;

    return MaxFa;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = Object.create(FreqStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 */
