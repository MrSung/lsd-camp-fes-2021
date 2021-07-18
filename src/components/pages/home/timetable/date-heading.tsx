import styled from 'styled-components'

import { Style } from '@/styles'

interface IDateHeadingProps {
  children: string
}

export const DateHeading = ({ children }: IDateHeadingProps) => (
  <Wrapper>
    <Inner>{children}</Inner>
  </Wrapper>
)

const Wrapper = styled.h3`
  height: 48px;
  background-color: ${Style.COLOR.GREEN_SHEEN};
  color: ${Style.COLOR.WHITE};
  font-size: 24px;
  line-height: 48px;
  text-align: center;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    height: ${Style.SIZE.TIMETABLE_HEADER_HEIGHT}px;
    padding-right: 0;
    padding-left: ${Style.SIZE.TIMETABLE_COL_LEFT_WIDTH}px;
    font-size: 36px;
    line-height: ${Style.SIZE.TIMETABLE_HEADER_HEIGHT}px;
  }
`

const Inner = styled.span`
  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    display: block;
  }
`
