import styled from 'styled-components'

import { Style } from '@/const/style'

const VENUE_COLOR = [
  Style.COLOR.MANGO_TANGO,
  Style.COLOR.STRAW,
  Style.COLOR.ORCHID_CRAYOLA,
]

interface IContentProps {
  labelNo: 0 | 1 | 2
  time: string
  title: string
  host: string
}

export const Content = ({ labelNo, time, title, host }: IContentProps) => (
  <Wrapper>
    <Dl>
      <Dt labelNo={labelNo}>{time}</Dt>
      <Dd>
        <Title>{title}</Title>
        <Host>{host}</Host>
      </Dd>
    </Dl>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 16px 16px 0;
`

const Dl = styled.dl``

interface IDtProps {
  labelNo: IContentProps['labelNo']
}

const Dt = styled.dt<IDtProps>`
  height: 44px;
  padding: 0 16px;
  background-color: ${({ labelNo }) => VENUE_COLOR[labelNo]};
  font-size: 16px;
  line-height: 44px;
`

const Dd = styled.dd`
  padding: 16px 16px 14px;
  background-color: ${Style.COLOR.WHITE};
`

const Title = styled.h4`
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 400;
`

const Host = styled.p`
  font-size: 14px;
  color: ${Style.COLOR.SPANISH_GRAY};
`
