export interface Signal<T> {
  (): T
  (value: T): void
}

export type Reactive<T> = Signal<T> &
  (T extends object
    ? { [key in keyof T]: Reactive<T[key]> }
    : {})

export type ReactiveMap<T> = {
  [key in keyof T]: Reactive<T[key]>
}

export type Option<T> = {
  reactiveMap: ReactiveMap<T>
  effects: Set<() => void>
  value: T
}

export type ReactiveType<T> =
  T extends Reactive<infer V> ? V : never

export type DependencyType<T extends Reactive<any> | Reactive<any>[]> =
  T extends Reactive<any>[]
  ? DependenciesType<T>
  : T extends Reactive<any>
  ? ReactiveType<T>
  : never

export type DependenciesType<T> =
  T extends [infer F, ...infer N]
  ? [ReactiveType<F>, ...DependenciesType<N>]
  : []
