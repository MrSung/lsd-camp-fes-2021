import styled from 'styled-components'

import { Style } from '@/styles'

interface IExternalLinkProps {
  href: string
  children: React.ReactNode
  display: 'block' | 'inline-block'
  isHeightFull?: boolean
  fillColor?: string
  color?: string
  hoverColor?: string
}

export const ExternalLink = ({
  href,
  children,
  display,
  isHeightFull,
  fillColor,
  color,
  hoverColor,
}: IExternalLinkProps) => (
  <Wrapper
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    display={display}
    isHeightFull={isHeightFull}
    fillColor={fillColor}
    color={color}
    hoverColor={hoverColor}
  >
    {children}
  </Wrapper>
)

interface IWrapperProps {
  display: IExternalLinkProps['display']
  fillColor: IExternalLinkProps['fillColor']
  isHeightFull: IExternalLinkProps['isHeightFull']
  color: IExternalLinkProps['color']
  hoverColor: IExternalLinkProps['hoverColor']
}

const Wrapper = styled.a<IWrapperProps>`
  display: ${({ display }) => display};
  background-color: ${({ fillColor }) => fillColor};
  color: ${({ color }) => color};

  ${({ isHeightFull }) =>
    isHeightFull === true &&
    `
      @media (min-width: ${Style.BREAKPOINT.MD}px) {
        height: 100%;
      }
  `}

  ${({ hoverColor }) =>
    typeof hoverColor !== `undefined` &&
    `
      &:hover {
        color: ${hoverColor};
      }
  `}

  ${({ color, hoverColor }) =>
    typeof color === `undefined` &&
    typeof hoverColor === `undefined` &&
    `
      &:hover > * {
        opacity: 0.8;
      }
  `}
`
