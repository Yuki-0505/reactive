import App from './App'
import { render } from 'solid-js/web';
import type { JSX } from 'solid-js'

render(App as unknown as () => JSX.Element, document.querySelector('#app')!)

setTimeout(() => {
  eval(`
const update = updateComputation
console.log(update)
updateComputation = function (node) {
  useEffect(() => update(node))
}
`)
}, 3000)
