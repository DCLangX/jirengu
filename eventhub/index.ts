class EventHub {
  private cache = {}
  on(eventName: string, fn: (data: unknown) => void) {
    if (this.cache[eventName] === undefined) {
      this.cache[eventName] = []
    }
    const array = this.cache[eventName]
    array.push(fn)
  }
  emit(eventName: string, data?: unknown) {
    let array
    if (this.cache[eventName] === undefined) {
      array = []
    } else {
      array = this.cache[eventName]
    }
    array.forEach(fn => {
      fn(data)
    })
  }
  off(eventName: string, fn: (data: unknown) => void) {
    let fnIndex = undefined
    if (this.cache[eventName]) {
      for (let index = 0; index < this.cache[eventName].length; index++) {
        if (this.cache[eventName][index] === fn) {
          fnIndex = index
          break
        }
      }
      if (fnIndex === undefined) {
        return
      } else {
        this.cache[eventName].splice(fnIndex, 1)
      }
    }

  }
}

export default EventHub