import { createElement } from './element.js'

export function mount(vnode, container) {
  if (typeof container === 'string') {
    container = document.querySelector(container)
  }
  container.appendChild(createElement(vnode))
}

export function unmount(vnode) {
  if (!vnode.el || !vnode.el.parentNode) {
    throw new Error('invalid vnode')
  }

  vnode.el.parentNode.removeChild(vnode.el)
}
