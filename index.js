function Person(name) {
  this.name = name
}

var a = new Person('a')

var b = Object.create(Person.prototype)

var c = Object.create(Person)

alert(c.__proto__.__proto__ === a.__proto__)