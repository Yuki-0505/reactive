import { useEffect } from './effect'
import { useReactive } from './reactive'
import type { Reactive } from './type'

export function useComputed<T>(getter: () => T): Reactive<T> {
  const data = useReactive<T>(null as T)
  useEffect(() => {
    data(getter())
  })
  return data
}
