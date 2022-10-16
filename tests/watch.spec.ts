import { test, expect } from 'vitest'
import { useReactive } from '../src/reactive'
import { Reactive } from '../src/type'
import { watch } from '../src/watch'

test('watch', async () => {
  const data1 = useReactive(1)
  const data2 = useReactive(2)

  const ret1: number[] = []
  watch(data1, (val) => {
    ret1.push(val)
  })

  const ret2: [number, number][] = []
  watch([data1, data2] as [Reactive<number>, Reactive<number>], (val) => {
    ret2.push(val)
  })

  data1(4)
  expect(ret1).toEqual([1, 4])

  data2(8)
  expect(ret2).toEqual([[1, 2], [4, 2], [4, 8]])
})
