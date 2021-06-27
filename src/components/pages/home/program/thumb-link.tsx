import Image from 'next/image'
import styled from 'styled-components'

import { Style } from '@/const/style'
import { ExternalLink } from '@/components/parts'

const VENUE_COLOR = [
  Style.COLOR.MANGO_TANGO,
  Style.COLOR.STRAW,
  Style.COLOR.ORCHID_CRAYOLA,
]

interface IThumbLinkProps {
  href: string
  labelNo: 0 | 1 | 2
  labelText: string
  src: StaticImageData
  alt: string
  width: number
  height: number
  title: string
}

export const ThumbLink = ({
  href,
  labelNo,
  labelText,
  src,
  alt,
  width,
  height,
  title,
}: IThumbLinkProps) => (
  <Wrapper width={width}>
    <ExternalLink href={href}>
      <Label labelNo={labelNo}>{labelText}</Label>
      <ThumbContainer width={width} height={height}>
        <Image src={src} alt={alt} />
      </ThumbContainer>
      <Title>{title}</Title>
    </ExternalLink>
  </Wrapper>
)

interface IWrapperProps {
  width: IThumbLinkProps['width']
}

const Wrapper = styled.div<IWrapperProps>`
  margin-bottom: 24px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    width: ${({ width }) => `${width}px`};
    margin-bottom: 0;
  }
`

interface ILabelProps {
  labelNo: IThumbLinkProps['labelNo']
}

const Label = styled.span<ILabelProps>`
  display: inline-block;
  position: relative;
  z-index: 1;
  bottom: -18px;
  height: 36px;
  margin-left: 16px;
  padding: 1px 12px 0;
  background-color: ${({ labelNo }) => VENUE_COLOR[labelNo]};
  line-height: 36px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    font-size: 16px;
  }
`

interface IThumbContainerProps {
  width: IThumbLinkProps['width']
  height: IThumbLinkProps['height']
}

const ThumbContainer = styled.div<IThumbContainerProps>`
  overflow: hidden;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
  }
`

const Title = styled.p`
  margin-top: 16px;
  font-size: 14px;
  line-height: 1.5;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    margin-top: 20px;
    font-size: 18px;
    line-height: 1.6;
  }
`
