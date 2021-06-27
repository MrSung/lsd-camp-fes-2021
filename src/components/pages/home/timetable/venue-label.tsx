import styled from 'styled-components'

import { Style } from '@/const/style'

const VENUE_COLOR = [
  Style.COLOR.MANGO_TANGO,
  Style.COLOR.STRAW,
  Style.COLOR.ORCHID_CRAYOLA,
]

interface IVenueLabelProps {
  labelNo: 0 | 1 | 2
  labelText: string
}

export const VenueLabel = ({ labelNo, labelText }: IVenueLabelProps) => (
  <Wrapper>
    <Container labelNo={labelNo}>{labelText}</Container>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 16px;
  background-color: ${Style.COLOR.GREEN_SHEEN};

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    padding: 18px 16px;
  }
`

interface IContainerProps {
  labelNo: IVenueLabelProps['labelNo']
}

const Container = styled.div<IContainerProps>`
  height: 44px;
  padding: 0 16px;
  background-color: ${({ labelNo }) => VENUE_COLOR[labelNo]};
  font-size: 16px;
  line-height: 44px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    font-size: 16px;
  }
`
