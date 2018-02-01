var canConstruct = function(ransomNote, magazine) {
	if(magazine.length<ransomNote.length){
		return false;
	}
	var array_ransomNote = ransomNote.split('');
	var maga_len = magazine.length;
	array_ransomNote.forEach(function(item,index){
		magazine = magazine.replace(item,'');
	});
	if(maga_len == magazine.length +array_ransomNote.length){
	return true;
	}
	else{
	return false;
	}
};