import { format, isBefore, isAfter, addHours } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

import { IProgramContent } from '@/pages'

export const programDateReducer = (contents: IProgramContent[]) => {
  const programDateReduced = contents.reduce<
    [IProgramContent[], IProgramContent[]]
  >(
    (acc, cur) => {
      const utcStartDate = new Date(cur.startDate)
      const jstStartDate = utcToZonedTime(utcStartDate, `Asia/Tokyo`)

      switch (true) {
        case format(jstStartDate, `yyyy-MM-dd`) === `2021-07-31`:
          acc[0].push(cur)
          break
        case format(jstStartDate, `yyyy-MM-dd`) === `2021-08-01`:
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
    const utcStartDate = new Date(cur.startDate)
    const jstStartDate = utcToZonedTime(utcStartDate, `Asia/Tokyo`)

    if (i === 0 || isBefore(jstStartDate, acc)) {
      acc = jstStartDate
    }

    return acc
  }, new Date())

  const endTime = contents.reduce((acc, cur, i) => {
    const utcEndDate = new Date(cur.endDate)
    const jstEndDate = utcToZonedTime(utcEndDate, `Asia/Tokyo`)

    if (i === 0 || isAfter(jstEndDate, acc)) {
      acc = jstEndDate
    }

    return acc
  }, new Date())

  const startHour = format(startTime, `HH`)
  const [endHour, endMinutes] = format(endTime, `HH:mm`).split(`:`)

  const parsedAddedHour = addHours(endTime, 1)
  const addedHour = format(parsedAddedHour, `HH`)

  return {
    startTime: `${startHour}:00`,
    endTime: endMinutes === `00` ? `${endHour}:00` : `${addedHour}:00`,
  }
}
