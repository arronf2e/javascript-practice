function Person(name) {
  this.name = name
}

var a = new Person('a')

var b = Object.create(Person.prototype)

var c = Object.create(a)

alert(a.__proto__ === c.__proto__.__proto__)