import styled from 'styled-components'

import { Style } from '@/const/style'

interface IExternalLinkProps {
  href: string
  children: React.ReactNode
  fillColor?: string
  isHeightFull?: boolean
  isSecondary?: boolean
}

export const ExternalLink = ({
  href,
  children,
  fillColor,
  isHeightFull,
  isSecondary,
}: IExternalLinkProps) => (
  <Wrapper
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    fillColor={fillColor}
    isHeightFull={isHeightFull}
    isSecondary={isSecondary}
  >
    {children}
  </Wrapper>
)

interface IWrapperProps {
  fillColor: IExternalLinkProps['fillColor']
  isHeightFull: IExternalLinkProps['isHeightFull']
  isSecondary: IExternalLinkProps['isSecondary']
}

const Wrapper = styled.a<IWrapperProps>`
  display: block;
  background-color: ${({ fillColor }) => fillColor};

  ${({ isHeightFull }) =>
    isHeightFull === true &&
    `
      @media (min-width: ${Style.BREAKPOINT.MD}px) {
        height: 100%;
      }
  `}

  ${({ isSecondary }) =>
    isSecondary === true &&
    `
      color: ${Style.COLOR.BLUE_JEANS};

      &:hover {
        color: ${Style.COLOR.GREEN_BLUE_CRAYOLA};
      }
  `}

  &:hover > * {
    opacity: 0.8;
  }
`
