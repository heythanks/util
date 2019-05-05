/***
 * 对象键值求和
 */
function sumOfObject(obj = {}) {
    if (typeof obj !== 'object') {
        throw "传入参数类型错误";
    }
    let keys = Object.keys(obj);
    let sum = keys.reduce((pre, cur) => {
        return pre + Number(obj[cur])
    }, 0)
    return sum
}

/***
 * 数组对象指定key去重
 * @param arr
 * @param key
 */
function keyUnique(arr = [], key) {
    if (typeof key !== 'string') {
        console.log('key的类型必须为String');
        return false
    }
    if (!(arr instanceof Array)) {
        console.log('检查数据的类型必须为Array');
        return false
    }
    if (Object.keys(arr[0]).indexOf(key) === -1) {
        console.log('指定去重键值有错误');
        return false
    }
    let newArr = [];
    arr.forEach((e, i) => {
        if (newArr.length === 0) {
            newArr.push(e)
        } else {
            let tag = false;
            newArr.forEach((n, j) => {
                if (e[key] === n[key]) {
                    tag = true;
                    return false
                }
            })
            if (!tag) {
                newArr.push(e)
            }
        }
    })
    return newArr
}
/***
 * 统计字符串字母出现次数
 */
function letterTime(str = '') {
    return str.split('').reduce((sum, cur) => {
        sum[cur] = (sum[cur] ? sum[cur] + 1 : sum[cur] = 1);
        return sum
    }, {})
}
/**
 * 新建并返回一个obj,指定keys的新obj
 */
var only = function(obj, keys){
    obj = obj || {};
    if ('string' == typeof keys) keys = keys.split(/ +/);
    return keys.reduce(function(ret, key){
      if (null == obj[key]) return ret;
      ret[key] = obj[key];
      return ret;
    }, {});
  };
