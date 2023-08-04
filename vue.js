function h(tag, props, children) {
  return {
    tag,
    props,
    children
  }
}

function createElement(vnode) {
  const element = document.createElement(vnode.tag)
  Object.keys(vnode.props).forEach(prop => {
    element.setAttribute(prop, vnode.props[prop])
  })

  if (vnode.children) {
    if (Array.isArray(vnode.children)) {
      vnode.children.forEach(child => {
        element.appendChild(createElement(child))
      })
    } else if (typeof vnode.children === 'string') {
      element.innerHTML = vnode.children
    } else {
      throw new Error('invalid vnode')
    }
  }

  vnode.el = element
  return element
}

function mount(vnode, container) {
  if (typeof container === 'string') {
    container = document.querySelector(container)
  }
  container.appendChild(createElement(vnode))
}

export function createApp(App) {
  return {
    mount: (container) => {
      const app = App.render(h)
      mount(app, container)
    },
  }
}
