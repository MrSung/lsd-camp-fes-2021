import Image from 'next/image'
import styled from 'styled-components'

import { Style } from '@/styles'
import { VenueKey, venue } from '@/contents/venue'
import { ExternalLink } from '@/components/parts'

interface IThumbLinkProps {
  href: string
  labelNo: VenueKey
  src: StaticImageData
  alt: string
  width: number
  height: number
  title: string
  host: string
}

export const ThumbLink = ({
  href,
  labelNo,
  src,
  alt,
  width,
  height,
  title,
  host,
}: IThumbLinkProps) => (
  <Wrapper width={width}>
    <ExternalLink href={href} display="block" isChangeOpacityOnHover>
      <Label labelNo={labelNo}>{venue[labelNo].text}</Label>
      <ThumbContainer width={width} height={height}>
        <Image src={src} alt={alt} layout="fill" />
      </ThumbContainer>
      <Title>{title}</Title>
      <Host>{host}</Host>
    </ExternalLink>
  </Wrapper>
)

interface IWrapperProps {
  width: IThumbLinkProps['width']
}

const Wrapper = styled.div<IWrapperProps>`
  margin-bottom: 24px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    width: ${({ width }) => `${width}px`};
  }

  &:not(:nth-of-type(4n)) {
    @media (min-width: ${Style.BREAKPOINT.MD}px) {
      margin-right: 30px;
    }
  }
`

interface ILabelProps {
  labelNo: IThumbLinkProps['labelNo']
}

const Label = styled.span<ILabelProps>`
  display: inline-block;
  position: relative;
  z-index: ${Style.Z_INDEX_1};
  bottom: -18px;
  height: 36px;
  margin-left: 16px;
  padding: 1px 12px 0;
  background-color: ${({ labelNo }) => venue[labelNo].color};
  line-height: 36px;
`

interface IThumbContainerProps {
  width: IThumbLinkProps['width']
  height: IThumbLinkProps['height']
}

const ThumbContainer = styled.div<IThumbContainerProps>`
  position: relative;
  overflow: hidden;

  @media (max-width: ${Style.BREAKPOINT.MD - 1}px) {
    width: calc(100vw - 32px);
    height: calc(100vw - 32px);
  }

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
  }
`

const Title = styled.p`
  margin-top: 16px;
  margin-bottom: 6px;
  line-height: 1.5;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    margin-top: 20px;
    font-size: 18px;
    line-height: 1.6;
  }
`

const Host = styled.p`
  color: ${Style.COLOR.RAISIN_GRAY};
`
