import styled from 'styled-components'

import { Style } from '@/const/style'

interface IExternalLinkProps {
  href: string
  children: React.ReactNode
  fillColor?: string
}

export const ExternalLink = ({
  href,
  children,
  fillColor,
}: IExternalLinkProps) => (
  <Wrapper
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    fillColor={fillColor}
  >
    {children}
  </Wrapper>
)

interface IWrapperProps {
  fillColor: IExternalLinkProps['fillColor']
}

const Wrapper = styled.a<IWrapperProps>`
  display: block;
  background-color: ${({ fillColor }) => fillColor};

  &:hover > * {
    opacity: 0.8;
    color: ${Style.COLOR.RAISIN_BLACK};
  }
`
