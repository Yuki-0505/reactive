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
