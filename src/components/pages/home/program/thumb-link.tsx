import Image from 'next/image'
import styled, { css } from 'styled-components'

import { Style } from '@/styles'
import { VenueKey, venue } from '@/contents/venue'
import { ExternalLink } from '@/components/parts'

const zeroStrippedMonthDateFactory = (time: string) => {
  const [monthDay, timeRange] = time.split(` `)
  const [month, day] = monthDay.split(`/`)
  const [startTime, endTime] = timeRange.split(`〜`)
  const [hh1, mm1] = startTime.split(`:`)
  const [hh2, mm2] = endTime.split(`:`)

  const stripZero = (twoDigitNumber: string) =>
    twoDigitNumber !== `00` && twoDigitNumber.startsWith(`0`)
      ? Array.from(twoDigitNumber).slice(-1).join(``)
      : twoDigitNumber

  return `${stripZero(month)}/${stripZero(day)} ${stripZero(hh1)}:${stripZero(
    mm1,
  )}〜${stripZero(hh2)}:${stripZero(mm2)}`
}

interface IThumbLinkProps {
  href: string
  labelNo: VenueKey
  src: StaticImageData
  alt: string
  width: number
  height: number
  time: string
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
  time,
  title,
  host,
}: IThumbLinkProps) => (
  <Wrapper width={width}>
    <ExternalLink href={href} display="block" isChangeOpacityOnHover>
      <Label>
        <VenueLabel labelNo={labelNo}>{venue[labelNo].text}</VenueLabel>
        <TimeLabel>{zeroStrippedMonthDateFactory(time)}</TimeLabel>
      </Label>
      <ThumbContainer width={width} height={height}>
        <Image src={src} alt={alt} layout="fill" />
      </ThumbContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Host>{host}</Host>
      </TextContainer>
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

const Label = styled.div`
  position: relative;
  z-index: ${Style.Z_INDEX_1};
  bottom: -18px;
  left: 16px;
  width: calc(100% - 16px);
  height: 36px;
  line-height: 36px;
`

const labelItemStyle = css`
  display: inline-block;
  padding: 1px 12px 0;
  border: 1px solid ${Style.COLOR.PLATINUM};
`

interface IVenueLabelProps {
  labelNo: IThumbLinkProps['labelNo']
}

const VenueLabel = styled.span<IVenueLabelProps>`
  ${labelItemStyle}

  border-right: none;
  background-color: ${({ labelNo }) => venue[labelNo].color};
`

const TimeLabel = styled.span`
  ${labelItemStyle}

  border-left: none;
  background-color: ${Style.COLOR.WHITE};
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

const TextContainer = styled.div`
  margin-top: 10px;
`

const Title = styled.p`
  margin-top: 10px;
  margin-bottom: 6px;
  line-height: 1.5;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    font-size: 18px;
    line-height: 1.6;
  }
`

const Time = styled.p`
  margin-bottom: 4px;
  color: ${Style.COLOR.RAISIN_GRAY};
`

const Host = styled.p`
  color: ${Style.COLOR.RAISIN_GRAY};
`
