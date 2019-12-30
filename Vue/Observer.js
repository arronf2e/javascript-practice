let cat = {
  brand: 'accord',
  price: '200000'
}

class Observer {
  constructor(obj, key) {
    this.defineReactive(obj, key)
  }

  defineReactive(obj, key) {
    let val = obj[key]
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get() {
        console.log('get')
        return val
      },
      set(newVal) {
        console.log('set: ', newVal)
        if(val === newVal) return
        val = newVal
      }
    })
  }
}

let ob = new Observer(cat, 'brand')

console.log(cat.brand, '12')