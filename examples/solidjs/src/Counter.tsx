// import { createSignal } from 'solid-js'

// export default function Counter() {
//   const [count, setCount] = createSignal(0)
//   const increase = () => setCount(count() + 1)
//   return (
//     <button id="counter" type="button" onClick={increase}>count is {count()}</button>
//   )
// }

import { useReactive, useEffect } from '@micro-cube/reactive'

useEffect(() => { })

export default function Counter() {
  const count = useReactive(0)
  const increase = () => count(count() + 1)
  return (
      <button id="counter" type="button" onClick={increase}>count is {count()}</button>
    )
}
