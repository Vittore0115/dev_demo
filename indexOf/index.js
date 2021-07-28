module.exports = function indexOf(arr, val) {
	// arr 不为数组
	if (Object.prototype.toString.call(arr) !== '[object Array]') {
		return -1
	}
	// arr 为空数组
	if (arr.length == 0) {
		return -1
	}

	// 定义一个索引数
	let index = -1

	while (++index < arr.length) {
		if (arr[index] === val) {
			return index
		}
	}
	return -1
}
