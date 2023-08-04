import { mount } from "./mount.js"
import { h } from './h.js'
import { effect } from './reactive.js'
import { patch } from './patch.js'

function render(Component) {
  let newNode
  effect(() => {
    const oldNode = newNode
    newNode = Component.render(h)

    if (oldNode) {
      patch(oldNode, newNode)
    }
  })
  return newNode
}

export function createApp(App) {
  const app = render(App)
  return {
    mount: (container) => {
      mount(app, container)
      return app
    },
  }
}
