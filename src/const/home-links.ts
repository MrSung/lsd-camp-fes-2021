import { Style } from './style'

export const HOME_LINK_MESSAGE = `message`
export const HOME_LINK_ABOUT = `about`
export const HOME_LINK_PROGRAM = `program`
export const HOME_LINK_TIMETABLE = `timetable`

export const HOME_LINKS = [
  {
    link: HOME_LINK_MESSAGE,
    offset: -Style.SIZE.HEADER_HEIGHT,
  },
  {
    link: HOME_LINK_ABOUT,
    offset: -Style.SIZE.HEADER_HEIGHT,
  },
  {
    link: HOME_LINK_PROGRAM,
    offset: -(Style.SIZE.HEADER_HEIGHT / 2),
  },
  {
    link: HOME_LINK_TIMETABLE,
    offset: 0,
  },
]
