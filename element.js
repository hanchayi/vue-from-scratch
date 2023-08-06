export function createElement(vnode, parent) {
  if (vnode.tag === 'slot') {
    if (!parent) {
      throw new Error('no parent')
    }

    if (!parent.$slots) {
      throw new Error('no $slots')
    }

    if (typeof parent.$slots === 'string') {
      return document.createTextNode(parent.$slots)
    }

    return parent.$slots
  }

  const element = document.createElement(vnode.tag)
  if (vnode.$on && vnode.$on.click) {
    element.addEventListener('click', vnode.$on.click)
  }
  Object.keys(vnode.props).forEach(prop => {
    element.setAttribute(prop, vnode.props[prop])
  })



  if (vnode.children) {
    if (Array.isArray(vnode.children)) {
      vnode.children.forEach(child => {
        element.appendChild(createElement(child, vnode))
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
