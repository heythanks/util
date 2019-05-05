/**
 * 数组去重
 * 注： object.keys不会按顺序返回key
 */
function unique(arr){
	let obj = arr.reduce((sum,cur) => {
        sum[cur] ? sum[cur]++ : (sum[cur] = 1);
		return sum
	},{})
	return Object.keys(obj);
	
}