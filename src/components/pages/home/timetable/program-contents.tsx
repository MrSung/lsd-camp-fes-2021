import { format, differenceInMinutes, isBefore, isAfter } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import styled from 'styled-components'

import { Style } from '@/styles'
import { VenueKey, venue } from '@/contents/venue'
import { IProgramContent } from '@/pages'
import { ExternalLink } from '@/components/parts'

export const ProgramContents = (
  contents: IProgramContent[],
  timeRange: string[],
  labelNo: VenueKey,
) =>
  contents
    .sort((a, b) => {
      const aUtcStartDate = new Date(a.startDate)
      const aJstStartDate = utcToZonedTime(aUtcStartDate, `Asia/Tokyo`)
      const bUtcStartDate = new Date(b.startDate)
      const bJstStartDate = utcToZonedTime(bUtcStartDate, `Asia/Tokyo`)

      if (isBefore(aJstStartDate, bJstStartDate)) {
        return -1
      }
      if (isAfter(aJstStartDate, bJstStartDate)) {
        return 1
      }
      return 0
    })
    .map((o) => {
      const utcStartDate = new Date(o.startDate)
      const jstStartDate = utcToZonedTime(utcStartDate, `Asia/Tokyo`)
      const utcEndDate = new Date(o.endDate)
      const jstEndDate = utcToZonedTime(utcEndDate, `Asia/Tokyo`)
      const startTime = format(jstStartDate, `HH:mm`)
      const endTime = format(jstEndDate, `HH:mm`)
      const startTimeGridIndex = timeRange.findIndex((t) => t === startTime) + 2
      const gridSpan =
        differenceInMinutes(jstEndDate, jstStartDate) / (60 * 0.25)

      return (
        <Content
          key={o.id}
          href={o.link}
          labelNo={labelNo}
          startTime={startTime}
          endTime={endTime}
          title={o.title}
          host={o.host}
          gridRow={`${startTimeGridIndex} / span ${gridSpan}`}
        />
      )
    })

interface IContentProps {
  href: string
  labelNo: VenueKey
  startTime: string
  endTime: string
  title: string
  host: string
  gridRow: string
}

export const Content = ({
  href,
  labelNo,
  startTime,
  endTime,
  title,
  host,
  gridRow,
}: IContentProps) => (
  <Wrapper gridRow={gridRow}>
    <ExternalLink
      href={href}
      display="block"
      fillColor={Style.COLOR.WHITE}
      isHeightFull
      isChangeOpacityOnHover
    >
      <Dl>
        <Dt labelNo={labelNo}>{`${startTime} 〜 ${endTime}`}</Dt>
        <Dd>
          <Title>{title}</Title>
          <Host>{host}</Host>
        </Dd>
      </Dl>
    </ExternalLink>
  </Wrapper>
)

interface IWrapperProps {
  gridRow: IContentProps['gridRow']
}

const Wrapper = styled.div<IWrapperProps>`
  padding: 16px 16px 0;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-row: ${({ gridRow }) => gridRow};
    padding: 0 24px;
  }
`

const Dl = styled.dl`
  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    height: 100%;
  }
`

interface IDtProps {
  labelNo: IContentProps['labelNo']
}

const Dt = styled.dt<IDtProps>`
  height: 44px;
  padding: 0 16px;
  background-color: ${({ labelNo }) => venue[labelNo].color};
  line-height: 44px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    font-size: 18px;
  }
`

const Dd = styled.dd`
  padding: 16px 16px 14px;
  background-color: ${Style.COLOR.WHITE};
`

const Title = styled.h4`
  margin-bottom: 6px;
  font-weight: 400;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    font-size: 18px;
  }
`

const Host = styled.p`
  color: ${Style.COLOR.SPANISH_GRAY};
`
