const minutesReducer = (i: number) => {
  switch (i % 4) {
    case 0:
      return `00`
    case 1:
      return `15`
    case 2:
      return `30`
    case 3:
      return `45`
    default:
      return ``
  }
}

export const timeRange = Array(24)
  .fill(0)
  .reduce(
    (acc: number[][], cur: number, i) => [
      ...acc,
      Array(4).fill(
        Array.from(`0` + String(cur + i))
          .slice(-2)
          .join(``),
      ),
    ],
    [],
  )
  .flat()
  .map(
    (h: number, i: number) => `${String(h)}:${minutesReducer(i)}`,
  ) as string[]
