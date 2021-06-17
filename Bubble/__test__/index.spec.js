test('测试冒泡算法', () => {
	const bubble = require('../index')
	const arr = [7, 1, 6, 0]
	const res = bubble(arr)

	expect(res).toStrictEqual([0, 1, 6, 7])
})
