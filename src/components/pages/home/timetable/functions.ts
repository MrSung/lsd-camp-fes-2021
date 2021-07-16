import { parse, format, isBefore, isAfter, addHours } from 'date-fns'

import { IProgramContent } from '@/pages'
import { dateToJaStdTime } from '@/utils/date'

export const programDateReducer = (contents: IProgramContent[]) =>
  contents.reduce<[IProgramContent[], IProgramContent[]]>(
    (acc, cur) => {
      const startDateRegExpMatchArr = cur.startDate.match(/^\d{4}-\d{2}-\d{2}/)

      if (startDateRegExpMatchArr === null) {
        throw new Error(`programDateReducer ~ RegExp match failed`)
      }

      const startDateStr = startDateRegExpMatchArr[0]

      switch (true) {
        case startDateStr === `2021-07-31`:
          acc[0].push(cur)
          break
        case startDateStr === `2021-08-01`:
          acc[1].push(cur)
          break
        default:
          throw new Error(`programDateReducer ~ default case error`)
      }
      return acc
    },
    [[], []],
  )

export const programVenueReducer = (contents: IProgramContent[]) =>
  contents.reduce<[IProgramContent[], IProgramContent[], IProgramContent[]]>(
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

export const timeRangeReducer = (contents: IProgramContent[]) => {
  const startTime = contents.reduce((acc, cur, i) => {
    const startDate = dateToJaStdTime(cur.startDate)
    if (
      i === 0 ||
      isBefore(
        parse(startDate, `HH:mm:ss`, new Date()),
        parse(acc, `HH:mm:ss`, new Date()),
      )
    ) {
      acc = startDate
    }

    return acc
  }, ``)
  const endTime = contents.reduce((acc, cur, i) => {
    const endDate = dateToJaStdTime(cur.endDate)
    if (
      i === 0 ||
      isAfter(
        parse(endDate, `HH:mm:ss`, new Date()),
        parse(acc, `HH:mm:ss`, new Date()),
      )
    ) {
      acc = endDate
    }

    return acc
  }, ``)

  const [startHour] = format(
    parse(startTime, `HH:mm:ss`, new Date()),
    `HH:mm`,
  ).split(`:`)
  const [endHour, endMinutes] = format(
    parse(endTime, `HH:mm:ss`, new Date()),
    `HH:mm`,
  ).split(`:`)
  const parsedAddedHour = addHours(parse(endTime, `HH:mm:ss`, new Date()), 1)
  const addedHour = format(parsedAddedHour, `HH`)

  return {
    startTime: `${startHour}:00`,
    endTime: endMinutes === `00` ? `${endHour}:00` : `${addedHour}:00`,
  }
}
