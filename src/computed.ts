import { useEffect } from './effect'
import { useReactive } from './reactive'
import type { Getter, Setter, ComputedProp, Computed } from './type'

export function useComputed<T>(accessor: ComputedProp<T>): Computed<ComputedProp<T>> {
  const data = useReactive<T>(null)
  let get: Getter<T> = () => null, set: Setter<T> = () => null
  if (typeof accessor === 'function') {
    get = accessor
  } else if (typeof accessor === 'object') {
    ({ get, set } = accessor)
  }
  useEffect(() => {
    data(get())
  })
  useEffect(() => {
    set(data())
  })
  return data
}
