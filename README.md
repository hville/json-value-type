<!-- markdownlint-disable MD004 MD007 MD010 MD041 MD022 MD024 MD032  MD036 -->

# json-value-type

*get the JSON type of a value*

```javascript
var jsonType = require('json-value-type')

function naiveType(val) {
  if (val === undefined) return
  var jsonValue = JSON.parse(JSON.stringify(val))
  return Object.prototype.toString.call(jsonValue).slice(8, -1).toLowerCase()
}

jsonType(new String()) // 'string'
naiveType(new String()) // 'string'

jsonType(NaN) // 'null'
naiveType(NaN) // 'null'

jsonType(Object.create(null)) // 'object'
jsonType(new Array(3)) // 'array'
```

`json-value-type` returns the same string type as the naive function defined above with optimizations to
avoid any actual JSON parsing and minimize `Object.prototype.toString` calls to edge cases only.

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)
