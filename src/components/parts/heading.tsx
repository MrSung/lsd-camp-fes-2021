import styled from 'styled-components'

import { Style } from '@/const/style'

interface IHeadingProps {
  children: React.ReactNode
}

export const Heading = ({ children }: IHeadingProps) => (
  <Wrapper>{children}</Wrapper>
)

const Wrapper = styled.h2`
  font-size: 36px;
  font-weight: 600;
  text-transform: capitalize;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    font-size: 54px;
  }
`
