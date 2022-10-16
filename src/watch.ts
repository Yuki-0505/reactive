import { useEffect } from './effect'
import type { DependencyType, Reactive } from './type'

export function watch<T extends Reactive<any> | Reactive<any>[]>(deps: T, cb: (value: DependencyType<T>) => void) {
  useEffect(() => {
    Array.isArray(deps)
      ? cb(deps.map(dep => dep()) as any)
      : cb(deps() as any)
  })
}
