/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    /*
    let res = [],
        str = [];
    for (let i = S.length - 1; i >= 0; i--) {
        if (('a' <= S[i] && S[i]<= 'z') || ('A' <= S[i]&& S[i] <= 'Z')) {
            str.push(S[i]);
            
        }
        else {
            res[i] = S[i];
        }
    }
    console.log(str);
    let index = 0;
    for (let i = 0; i < str.length; i++) {
        if (res[index] == null) {
            res[index] = str[i];
            index++;
        }
        else {
            index++;
            i--;
        }
    }
    return res.join('');
    */
    
    S = S.split('')
    let left = 0
    let right = S.length - 1
    while (left < right) {
        if (/[a-zA-Z]/.test(S[left]) && /[a-zA-Z]/.test(S[right])) {
            let temp = S[left]
            S[left] = S[right]
            S[right] = temp
            left++
            right--
        } else if (!/[a-zA-Z]/.test(S[left])) {
            left++
        } else if (!/[a-zA-Z]/.test(S[right])) {
            right--
        }
    }

    return S.join('')
};
