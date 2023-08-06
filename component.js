export function renderComponent(h, component, props, children) {
  const vnode = component.render(h, props.props)
  vnode.$props = props.props
  vnode.$on = props.on
  vnode.$slots = children
  return vnode
}
