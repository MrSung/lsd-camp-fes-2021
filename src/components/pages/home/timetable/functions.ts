import { format, isBefore, isAfter, addHours } from 'date-fns'

import { IProgramContent } from '@/pages'

export const programDateReducer = (contents: IProgramContent[]) => {
  const programDateReduced = contents.reduce<
    [IProgramContent[], IProgramContent[]]
  >(
    (acc, cur) => {
      const eventDate = cur.eventDate[0]

      switch (true) {
        case eventDate === `7/31`: // 前夜祭
          acc[0].push(cur)
          break
        case eventDate === `8/1`: // 当日
          acc[1].push(cur)
          break
        default:
          throw new Error(`programDateReducer ~ default case error`)
      }
      return acc
    },
    [[], []],
  )

  return programDateReduced
}

export const programVenueReducer = (contents: IProgramContent[]) => {
  const programVenueReduced = contents.reduce<
    [IProgramContent[], IProgramContent[], IProgramContent[]]
  >(
    (acc, cur) => {
      switch (cur.venue[0]) {
        case `1`:
          acc[0].push(cur)
          break
        case `2`:
          acc[1].push(cur)
          break
        case `3`:
          acc[2].push(cur)
          break
        default:
          throw new Error(`programVenueReducer ~ default case error`)
      }
      return acc
    },
    [[], [], []],
  )

  return programVenueReduced
}

export const timeRangeReducer = (contents: IProgramContent[]) => {
  const startTime = contents.reduce((acc, cur, i) => {
    const jstStartDate = new Date(cur.startDate)

    if (i === 0 || isBefore(jstStartDate, acc)) {
      acc = jstStartDate
    }

    return acc
  }, new Date())

  const endTime = contents.reduce((acc, cur, i) => {
    const jstEndDate = new Date(cur.endDate)

    if (i === 0 || isAfter(jstEndDate, acc)) {
      acc = jstEndDate
    }

    return acc
  }, new Date())

  const startHour = format(startTime, `HH`)
  const [endHour, endMinutes] = format(endTime, `HH:mm`).split(`:`)
  const addedHour = format(addHours(endTime, 1), `HH`)

  return {
    startTime: `${startHour}:00`,
    endTime: endMinutes === `00` ? `${endHour}:00` : `${addedHour}:00`,
  }
}
