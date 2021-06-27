import styled from 'styled-components'

import { Style } from '@/const/style'

interface IExternalLinkProps {
  href: string
  children: React.ReactNode
}

export const ExternalLink = ({ href, children }: IExternalLinkProps) => (
  <Wrapper href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Wrapper>
)

const Wrapper = styled.a`
  display: block;

  &:hover {
    opacity: 0.8;
    color: ${Style.COLOR.RAISIN_BLACK};
  }
`
