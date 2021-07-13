import { Style } from '@/styles'

export type VenueKey = '1' | '2' | '3'

type VenueType = {
  [key in VenueKey]: {
    text: string
    color: string
  }
}

export const venue: VenueType = {
  '1': {
    text: `会場A`,
    color: Style.COLOR.MANGO_TANGO,
  },
  '2': {
    text: `会場B`,
    color: Style.COLOR.STRAW,
  },
  '3': {
    text: `会場C`,
    color: Style.COLOR.ORCHID_CRAYOLA,
  },
}
