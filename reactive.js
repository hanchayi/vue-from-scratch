let observers = new Map()
let handler
let queue = new Set()
let flushing = false

function flushQueue() {
  if (queue.size > 0) {
    flushing = true
    new Promise((resolve) => {
      resolve()
    }).then(() => {
      queue.forEach(handler => {
        handler()
      })
      queue.clear()
    })
  }
}

export function reactive(obj) {
  /**
   * [why proxy](https://juejin.cn/post/7204844328111374391#heading-0)
   */
  return new Proxy(obj, {
    get(_obj, key) {
      observers[obj] = handler
      return obj[key]
    },
    set(_obj, key, value) {
      obj[key] = value
      queue.add(observers[obj])
      flushQueue()
      return true
    }
  })
}

export function effect(cb) {
  handler = cb
  cb()
}
