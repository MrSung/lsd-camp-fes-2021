import { format } from 'date-fns'
import styled from 'styled-components'

import { Style } from '@/const/style'
import { VenueKey, Venue } from '@/const/venue'
import { dateToJaStdDateTime } from '@/utils/date'
import { IProgramContent } from '@/pages'
import { ExternalLink } from '@/components/parts'

export const ProgramContents = (
  contents: IProgramContent[],
  timeRange: string[],
  labelNo: VenueKey,
) =>
  contents.map((o) => {
    const startTime = format(
      new Date(dateToJaStdDateTime(o.startDate)),
      `HH:mm`,
    )
    const endTime = format(new Date(dateToJaStdDateTime(o.endDate)), `HH:mm`)

    const startTimeGridIndex = timeRange.findIndex((t) => t === startTime) + 2
    const endTimeIndex = timeRange.findIndex((t) => t === endTime)
    const endTimeGridIndex =
      endTimeIndex === -1 ? timeRange.length : endTimeIndex + 2

    return (
      <Content
        key={o.id}
        href={o.link}
        labelNo={labelNo}
        startTime={startTime}
        endTime={endTime}
        title={o.title}
        host={`host name`}
        gridRow={`${startTimeGridIndex} / ${endTimeGridIndex}`}
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
    <ExternalLink href={href} fillColor={Style.COLOR.WHITE}>
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

const Dl = styled.dl``

interface IDtProps {
  labelNo: IContentProps['labelNo']
}

const Dt = styled.dt<IDtProps>`
  height: 44px;
  padding: 0 16px;
  background-color: ${({ labelNo }) => Venue[labelNo].color};
  font-size: 16px;
  line-height: 44px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    font-size: 18px;
  }
`

const Dd = styled.dd`
  padding: 16px 16px 14px;
  background-color: ${Style.COLOR.WHITE};

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    height: ${Style.SIZE.TIMETABLE_CONTENT_HEIGHT - 44}px;
  }
`

const Title = styled.h4`
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 400;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    font-size: 18px;
  }
`

const Host = styled.p`
  color: ${Style.COLOR.SPANISH_GRAY};
  font-size: 14px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    font-size: 18px;
  }
`
