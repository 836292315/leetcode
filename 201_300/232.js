/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.inbox = [];
    this.outbox = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inbox.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (this.inbox.length) {
        this.outbox.push(this.inbox.pop());
    }
    var tem = this.outbox.pop();
    while (this.outbox.length) {
        this.inbox.push(this.outbox.pop());
    }
    return tem;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.inbox[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.inbox.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */