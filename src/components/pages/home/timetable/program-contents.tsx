import { parse, format, differenceInMinutes, isBefore, isAfter } from 'date-fns'
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
      const ast = parse(a.startTime, `HH:mm`, new Date())
      const bst = parse(b.startTime, `HH:mm`, new Date())

      if (isBefore(ast, bst)) {
        return -1
      }
      if (isAfter(ast, bst)) {
        return 1
      }
      return 0
    })
    .map((o) => {
      const st = parse(o.startTime, `HH:mm`, new Date())
      const et = parse(o.endTime, `HH:mm`, new Date())
      const startTime = format(parse(o.startTime, `HH:mm`, new Date()), `HH:mm`)
      const endTime = format(parse(o.endTime, `HH:mm`, new Date()), `HH:mm`)
      const startTimeIndex =
        timeRange.findIndex((t) => t === startTime) !== -1
          ? timeRange.findIndex((t) => t === startTime)
          : timeRange.findIndex((t) => t === hhmmQuarterMinReducer(startTime))
      const startTimeGridIndex = startTimeIndex + 2
      const gridSpan = Math.ceil(differenceInMinutes(et, st) / (60 * 0.25))

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
          gridSpan={gridSpan}
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
  gridSpan: number
}

export const Content = ({
  href,
  labelNo,
  startTime,
  endTime,
  title,
  host,
  gridRow,
  gridSpan,
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
          <Title gridSpan={gridSpan}>{title}</Title>
          {gridSpan >= 2 && <Host>{host}</Host>}
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
    padding: 0 24px 0 0;
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

interface ITitleProps {
  gridSpan: IContentProps['gridSpan']
}

const Title = styled.h4<ITitleProps>`
  font-weight: 400;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    font-size: 18px;
  }

  ${({ gridSpan }) =>
    gridSpan <= 2 &&
    `
    @media (min-width: ${Style.BREAKPOINT.MD}px) {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `}
`

const Host = styled.p`
  margin-top: 6px;
  color: ${Style.COLOR.SPANISH_GRAY};
`
