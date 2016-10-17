module.exports = jsonType

//returns the JSON data type string or undefined
function jsonType(val) {
	if (val === undefined) return
	if (val === null) return jsonType.NULL
	if (val === true || val === false) return jsonType.BOOLEAN
	if (Array.isArray(val)) return jsonType.ARRAY

	switch (typeof val) {
		// number, string, symbol, function, object, undefined, boolean
		case jsonType.STRING: return jsonType.STRING
		case jsonType.NUMBER: return numberType(val)
		case jsonType.OBJECT: break
		default: return
	}

	switch (Object.prototype.toString.call(val)[8]) {
		// Done: Undefined, Null, Function, Array,
		// Remaining: Object, Date, String, Boolean, Number, Argument, RegExp, Error
		case 'O': return jsonType.OBJECT
		case 'D': return jsonType.STRING
		case 'S': return jsonType.STRING
		case 'B': return jsonType.BOOLEAN
		case 'N': return numberType(val)
		case 'A': return jsonType.OBJECT
		case 'E': return jsonType.OBJECT
		case 'R': return jsonType.OBJECT
	}
}
function numberType(val) {
	return (val < Infinity && val > Number.NEGATIVE_INFINITY) ? jsonType.NUMBER : jsonType.NULL
}
/*eslint no-unused-expressions: 0*/
jsonType.OBJECT = 'object',
jsonType.ARRAY = 'array',
jsonType.NUMBER = 'number',
jsonType.STRING = 'string',
jsonType.BOOLEAN = 'boolean',
jsonType.NULL = 'null'
