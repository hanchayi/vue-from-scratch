export function createElement(vnode) {
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
