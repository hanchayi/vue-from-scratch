export function h(tag, props, children) {
  if (typeof tag === 'string') {
    return {
      tag,
      props,
      children
    }
  } else {
    const vnode = tag.render(h)
    return vnode
  }
}
