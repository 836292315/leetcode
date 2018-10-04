/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let obj = {};
	let res = [];
	for (let el of cpdomains) {
		let tem = el.split(" ");
		let num = parseInt(tem[0]);
		let domain = tem[1].split(".");
		let key = domain.pop();
		obj[key] = obj[key] ? obj[key] + num : num;
		while (domain.length > 0) {
			key = domain.pop() + '.' + key;
			obj[key] = obj[key] ? obj[key] + num : num;
		}
	}
	for (let i in obj) {
		res.push(obj[i] + ' ' + i);
	}
	return res;
};