let currentEffect: () => void = null
const cache = new Set<() => void>()

// 清空依赖缓存
export function clear() {
  for (const effect of cache) {
    effect()
    cache.delete(effect)
  }
}

// 跟踪依赖
export function track(effects: Set<() => void>) {
  if (currentEffect) {
    effects.add(currentEffect)
  }
}

// 触发依赖
export function trigger(effects: Set<() => void>) {
  for (const effect of effects) {
    cache.add(effect)
  }
  clear()
}

export function useEffect(effect: () => void) {
  currentEffect = effect
  effect()
  currentEffect = null
}
