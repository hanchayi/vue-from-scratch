import createElement from './createElement.js'

export function h(tag, props, children) {
  return {
    tag,
    props,
    children
  }
}

function mount(vnode, container) {
  if (typeof container === 'string') {
    container = document.querySelector(container)
  }
  container.appendChild(createElement(vnode))
}

export function createApp(App) {
  const app = App.render(h)
  return {
    mount: (container) => {
      mount(app, container)
      return app
    },
  }
}
