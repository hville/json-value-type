var ct = require('cotest'),
		jt = require('./json-type')

function naiveType(val) {
	var res = JSON.parse(JSON.stringify(val))
	return Object.prototype.toString.call(res).slice(8, -1).toLowerCase()
}
function naiveTest(val) {
	ct('===', jt(val), naiveType(val))
	ct('===', jt(JSON.parse(JSON.stringify(val))), naiveType(val))
}

ct('undefined', function() {
	ct('===', jt(), undefined)
	ct('===', jt(undefined), undefined)
})

ct('round test null, Infinity, NaN', function() {
	naiveTest(null)
	naiveTest(NaN)
	naiveTest(1/0)
	naiveTest(-1/0)
})
ct('round test strings', function() {
	naiveTest('')
	naiveTest('a')
	naiveTest('null')
	naiveTest('true')
	naiveTest('false')
	naiveTest(new String('false'))
	naiveTest(String('false'))
	naiveTest(String(''))
})
ct('round test numbers', function() {
	naiveTest(0)
	naiveTest(1)
	naiveTest(1e10)
	naiveTest(-1)
	naiveTest(1e-10)
	naiveTest(new Number())
	naiveTest(Number())
	naiveTest(Number(3))
})
ct('round test boolean', function() {
	naiveTest(true)
	naiveTest(false)
	naiveTest(new Boolean())    //undefined === boolean
	naiveTest(Boolean())
	naiveTest(Boolean(true))
	naiveTest(Boolean(false))
})
ct('round test array', function() {
	naiveTest([])
	naiveTest(new Array())
	naiveTest(Array())
	naiveTest(new Array(3))
	naiveTest(Array(3))
})
ct('round test object', function() {
	naiveTest({})
	naiveTest(Object.create(null))
	naiveTest(Object.create(Array))
	naiveTest({ constructor: Array })
	naiveTest(new Object())
	naiveTest(Object())
})
ct('edge cases', function() {
	naiveTest(arguments) //obj
	naiveTest(new Date()) //str
	naiveTest(Error()) //obj
	naiveTest(/a/) //obj
})

