import { createApp } from './vue.js'
import { reactive } from './reactive.js'

const data = reactive({
  hello: 'hello',
  world: 'world',
  type: 'primary'
})

const Button = {
  props: [ 'type' ],
  render(h, props) {
    let color = props && props.type === 'primary' ? 'blue' : 'red'
    return h('button', { style: `color: ${color}` }, 'click me')
  }
}

const App = {
  render(h) {
    return h('div', {}, [
      h('span', { style: 'color: red' }, data.hello),
      h('span', { style: 'color: green' }, data.world),
      h(Button, {
        props: {
          type: data.type
        },
        on: {
          click: () => {
            data.type = data.type === 'primary' ? '' : 'primary'
          }
        }
      }, 'click me')
    ])
  }
}

const app = createApp(App).mount('#app')
console.log(app)

setTimeout(() => {
  data.hello = 'hello1'
  data.world = 'world1'
}, 1000)
