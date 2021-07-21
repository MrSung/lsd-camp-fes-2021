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
    text: `Camper's Market A`,
    color: Style.COLOR.STRAW,
  },
  '3': {
    text: `Camper's Market B`,
    color: Style.COLOR.ORCHID_CRAYOLA,
  },
  '4': {
    text: `Camper's Market C`,
    color: Style.COLOR.ELECTRIC_BLUE,
  },
}
