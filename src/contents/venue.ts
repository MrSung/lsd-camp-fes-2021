import { Style } from '@/styles'

export type VenueKey = '1' | '2' | '3' | '4'

type VenueType = {
  [key in VenueKey]: {
    text: string
    color: string
  }
}

export const venue: VenueType = {
  '1': {
    text: `みんなの広場`,
    color: Style.COLOR.MANGO_TANGO,
  },
  '2': {
    text: `ひだまりキャンプ`,
    color: Style.COLOR.STRAW,
  },
  '3': {
    text: `わくわくキャンプ`,
    color: Style.COLOR.ORCHID_CRAYOLA,
  },
  '4': {
    text: `あおぞらキャンプ`,
    color: Style.COLOR.ELECTRIC_BLUE,
  },
}
