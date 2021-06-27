import styled from 'styled-components'

import { Style } from '@/const/style'
import { VenueKey, Venue } from '@/const/venue'

interface IVenueLabelProps {
  labelNo: VenueKey
}

export const VenueLabel = ({ labelNo }: IVenueLabelProps) => (
  <Wrapper>
    <Container labelNo={labelNo}>{Venue[labelNo].text}</Container>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 16px;
  background-color: ${Style.COLOR.GREEN_SHEEN};

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    padding: 18px 24px;
  }
`

interface IContainerProps {
  labelNo: IVenueLabelProps['labelNo']
}

const Container = styled.div<IContainerProps>`
  height: 44px;
  padding: 0 16px;
  background-color: ${({ labelNo }) => Venue[labelNo].color};
  font-size: 16px;
  line-height: 44px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    font-size: 18px;
  }
`
