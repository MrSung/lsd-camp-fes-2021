import { format, differenceInMinutes, isBefore, isAfter } from 'date-fns'
import styled from 'styled-components'

import { Style } from '@/styles'
import { VenueKey, venue } from '@/contents/venue'
import { IProgramContent } from '@/pages'
import { ExternalLink } from '@/components/parts'

const hhmmQuarterMinReducer = (hhColonMm: string) => {
  const [hh, mm] = hhColonMm.split(`:`)

  switch (mm) {
    case `55`:
    case `05`:
      return `${hh}:00`
    case `10`:
    case `20`:
      return `${hh}:15`
    case `25`:
    case `35`:
      return `${hh}:30`
    case `40`:
    case `50`:
      return `${hh}:45`
    default:
      throw new Error(`hhmmQuarterMinReducer ~ default case error`)
  }
}

export const ProgramContents = (
  contents: IProgramContent[],
  timeRange: string[],
  labelNo: VenueKey,
) =>
  contents
    .sort((a, b) => {
      const aJstStartDate = new Date(a.startDate)
      const bJstStartDate = new Date(b.startDate)

      if (isBefore(aJstStartDate, bJstStartDate)) {
        return -1
      }
      if (isAfter(aJstStartDate, bJstStartDate)) {
        return 1
      }
      return 0
    })
    .map((o) => {
      const jstStartDate = new Date(o.startDate)
      const jstEndDate = new Date(o.endDate)
      const startTime = format(jstStartDate, `HH:mm`)
      const endTime = format(jstEndDate, `HH:mm`)
      const startTimeIndex =
        timeRange.findIndex((t) => t === startTime) !== -1
          ? timeRange.findIndex((t) => t === startTime)
          : timeRange.findIndex((t) => t === hhmmQuarterMinReducer(startTime))
      const startTimeGridIndex = startTimeIndex + 2
      const gridSpan = Math.ceil(
        differenceInMinutes(jstEndDate, jstStartDate) / (60 * 0.25),
      )

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
