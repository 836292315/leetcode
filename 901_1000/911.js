/**
 * @param {number[]} persons
 * @param {number[]} times
 *refer to https://leetcode.com/problems/online-election/discuss/174415/JavaScript-solution
 */
var TopVotedCandidate = function(persons, times) {
    this.winningTimes = {};
    this.times = times;
    var votesCount = [];

    var currentWinningPerson = -1;
    var winningVotes = 0;
    for (var i = 0; i < persons.length; i++) {
        if (!votesCount[persons[i]]) {
            votesCount[persons[i]] = 0;
        };
        votesCount[persons[i]]++;
        if (votesCount[persons[i]] >= winningVotes) {
            winningVotes = votesCount[persons[i]];
            currentWinningPerson = persons[i];
        }
        this.winningTimes[times[i]] = currentWinningPerson;
    }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
    console.log(t)
    var p = 0;
    while (this.times[p] < t) {
        p++;
    }

    if (this.times[p] === t) {
        return this.winningTimes[this.times[p]];
    }
    return this.winningTimes[this.times[p - 1]];
};

/** 
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = Object.create(TopVotedCandidate).createNew(persons, times)
 * var param_1 = obj.q(t)
 */
