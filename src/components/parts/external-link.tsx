import styled from 'styled-components'

import { Style } from '@/styles'

interface IExternalLinkProps {
  href: string
  children: React.ReactNode
  display: 'block' | 'inline-block'
  fillColor?: string
  color?: string
  hoverColor?: string
  isHeightFull?: boolean
  isChangeOpacityOnHover?: boolean
}

export const ExternalLink = ({
  href,
  children,
  display,
  fillColor,
  color,
  hoverColor,
  isHeightFull,
  isChangeOpacityOnHover,
}: IExternalLinkProps) => (
  <Wrapper
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    display={display}
    fillColor={fillColor}
    color={color}
    hoverColor={hoverColor}
    isHeightFull={isHeightFull}
    isChangeOpacityOnHover={isChangeOpacityOnHover}
  >
    {children}
  </Wrapper>
)

interface IWrapperProps {
  display: IExternalLinkProps['display']
  fillColor: IExternalLinkProps['fillColor']
  color: IExternalLinkProps['color']
  hoverColor: IExternalLinkProps['hoverColor']
  isHeightFull: IExternalLinkProps['isHeightFull']
  isChangeOpacityOnHover: IExternalLinkProps['isChangeOpacityOnHover']
}

const Wrapper = styled.a<IWrapperProps>`
  display: ${({ display }) => display};
  background-color: ${({ fillColor }) => fillColor};
  color: ${({ color }) => color};

  ${({ hoverColor }) =>
    typeof hoverColor !== `undefined` &&
    `
      &:hover {
        color: ${hoverColor};
      }
  `}

  ${({ isHeightFull }) =>
    isHeightFull === true &&
    `
      @media (min-width: ${Style.BREAKPOINT.MD}px) {
        height: 100%;
      }
  `}

  ${({ isChangeOpacityOnHover }) =>
    isChangeOpacityOnHover === true &&
    `
      &:hover > * {
        opacity: 0.8;
      }
  `}
`
