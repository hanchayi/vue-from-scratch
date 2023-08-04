import { createApp } from './vue.js'
import { reactive } from './reactive.js'

const data = reactive({
  hello: 'hello',
  world: 'world'
})

const App = {
  render(h) {
    return h('div', {}, [
      h('span', { style: 'color: red' }, data.hello),
      h('span', { style: 'color: green' }, data.world),
    ])
  }
}

const app = createApp(App).mount('#app')
console.log(app)

setTimeout(() => {
  data.hello = 'hello1'
  data.world = 'world1'
}, 1000)
