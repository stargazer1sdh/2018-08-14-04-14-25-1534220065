module.exports = function main(num) {
    console.log("Debug Info");
	var strs = [];
	for(var j=0;j<num.length;++j){
		var ch = num.charAt(j);
		strs.push(getStrFromNum(ch));
	}
	var ans = ''; 
    for(var line=0;line<3;++line){
		for(var i=0;i<strs.length;++i){
			ans += strs[i][line];
			if(i==strs.length-1)
				ans += '\n';
			else
				ans += ' ';
		}
	}
	return ans;
};

function getStrFromNum(num) {
	if(num==0)
		return ['._.','|.|','|_|'];
	else if(num ==1)
		return ['...','..|','..|'];
	else if(num ==2)
		return ['._.','._|','|_.'];
	else if(num ==3)
		return ['._.','._|','._|'];
	else if(num ==4)
		return ['...','|_|','..|'];
	else if(num ==5)
		return ['._.','|_.','._|'];
	else if(num ==6)
		return ['._.','|_.','|_|'];
	else if(num ==7)
		return ['._.','..|','..|'];
	else if(num ==8)
		return ['._.','|_|','|_|'];
	else
		return ['._.','|_|','..|'];
}