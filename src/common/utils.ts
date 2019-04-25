export function *rangeIterator(from: number, to: number): IterableIterator<number> {
  for (let i = from; i <= to; i++) {
    yield i
  }
}

export function range(from: number, to: number): number[] {
  return Array.from(rangeIterator(from, to))
}
