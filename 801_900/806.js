/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    let len = S.length,
        lines = 1,
        pos = 0;
    for (let i = 0; i < len; i++) {
        pos += widths[S.charCodeAt(i) - 97];
        if (pos > 100) //超出这行的宽度
        {
            lines++;
            pos = 0; //往下一行写
            i--; //在下一行重写这个单词
        }
    }
    return [lines, pos];
};