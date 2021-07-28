test('测试数组元素查找', () => {
	const indexOf = require('../index')
	const arr = [6, 8, 10, 12]
	const res = indexOf(arr, 10)
	expect(res).toBe(2)
})
