function _new() {
  var obj = new Object()
  var Constructor = [].shift.call(arguments)
  obj.__proto__ === Constructor.prototype
  var ret = Constructor.apply(obj, arguments)
  return typeof ret === 'object' ? ret : obj
}

function Person(name) {
  this.name = name
}

var p = _new(Person, 'arron')

console.log(p.name)