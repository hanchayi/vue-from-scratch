export function h(tag, props, children) {
  if (typeof tag === 'string') {
    return {
      tag,
      props,
      children
    }
  } else {
    const vnode = tag.render(h, props.props)
    vnode.$props = props.props
    vnode.$on = props.on
    return vnode
  }
}
