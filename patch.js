import { mount, unmount } from "./mount.js"

export function patch(oldNode, newNode) {
  // tag不一样
  if (oldNode.tag !== newNode.tag) {
    mount(newNode, oldNode.el.parentNode)
    unmount(oldNode)
    return
  }

  // 文本节点
  if (typeof newNode.children === 'string') {
    if (oldNode.children === newNode.children) {
      return
    }
    oldNode.el.innerHTML = newNode.children
    return
  }

  if (typeof oldNode.children === 'string') {
    oldNode.el.innerHTML = ''
    newNode.children.forEach(child => {
      mount(child, oldNode.el)
    })
    return
  }

  // 数组节点
  let max = Math.max(newNode.children.length, oldNode.children.length)

  for(let i = 0; i < max; i++) {
    if (oldNode.children[i] && !newNode.children[i]) {
      unmount(oldNode.children[i])
    } else if (!oldNode.children[i] && newNode.children[i]) {
      mount(newNode.children[i], oldNode.el)
    } else {
      patch(oldNode.children[i], newNode.children[i])
    }
  }
}
