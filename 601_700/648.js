/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
/*
var replaceWords = function(dict, s) {
    dict.sort((x,y) => x.length - y.length);
    s = s.split(' ');
    s = s.map(x => {
        for(let  i = 0; i < dict.length; i++) {
            if(x.slice(0,dict[i].length) === dict[i]) {
                return dict[i];
            }             
        }
        return x;
    });
    return s.join(' ')       
};
*/
var replaceWords = function (dict, sentence) {
    dict.sort();
    let unsortedParts = sentence.split(" ");
    let parts = unsortedParts.slice();
    parts.sort();

    let i = 0,
        j = 0;
    let rootMap = {};
    while (i < dict.length && j < parts.length) {
        let part = parts[j];
        let root = dict[i];
        // dict is ahead, increase part
        if (root > part) {
            j++;
        } else {
            if (part.startsWith(root)) {
                rootMap[part] = root;
                j++;
            } else {
                i++;
            }
        }
    }
    for (i = 0; i < unsortedParts.length; i++) {
        if (rootMap[unsortedParts[i]]) {
            unsortedParts[i] = rootMap[unsortedParts[i]];
        }
    }
    return unsortedParts.join(" ");
};