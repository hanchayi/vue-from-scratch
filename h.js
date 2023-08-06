import { renderComponent } from "./component.js"

export function h(tag, props, children) {
  if (typeof tag === 'string') {
    return {
      tag,
      props,
      children
    }
  } else {
    return renderComponent(h, tag, props, children)
  }
}
