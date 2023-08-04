import { mount } from "./mount.js"
import { h } from './h.js'

export function createApp(App) {
  const app = App.render(h)
  return {
    mount: (container) => {
      mount(app, container)
      return app
    },
  }
}
