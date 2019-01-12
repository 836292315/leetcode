/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   /*
   let map = {};
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let sorted = str.split('').sort().join('');
        if(map[sorted] === undefined){
            map[sorted] = [str]; 
        }
        else{
            map[sorted].push(str);
        }
    }
    let res = [];
    for(let arr in map){
        res.push(map[arr]);
    }
    return res;
    */
    
    let res = {};
    for(let i=0; i<strs.length; i++){
        let word = strs[i];
        let key = word.split('').sort().join('');
        if(!res[key]) res[key] = [word];
        else res[key].push(word);
    }
    return Object.values(res);
};
