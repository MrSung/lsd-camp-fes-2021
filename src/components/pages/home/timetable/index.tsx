import { parse, format, isBefore, isAfter, isSameDay } from 'date-fns'
import styled, { css } from 'styled-components'

import { Style } from '@/const/style'
import { timeRange } from '@/const/time-range'
import { dateToJaStdTime, dateToJaStdDate } from '@/utils/date'
import { sectionStyle, containerStyle, headingStyle } from '@/styles'
import { IProgramData, IProgramContent } from '@/pages'
import { DateHeading } from './date-heading'
import { VenueLabel } from './venue-label'
import { ProgramContents } from './program-contents'

const timeRangeReducer = (contents: IProgramContent[]) => {
  const startTime = contents.reduce((acc, cur, i) => {
    const startDate = dateToJaStdTime(cur.startDate)

    if (
      i === 0 ||
      isBefore(
        parse(startDate, `HH:mm:ss`, new Date()),
        parse(acc, `HH:mm:ss`, new Date()),
      )
    ) {
      acc = startDate
    }

    return acc
  }, ``)

  const endTime = contents.reduce((acc, cur, i) => {
    const endDate = dateToJaStdTime(cur.endDate)

    if (
      i === 0 ||
      isAfter(
        parse(endDate, `HH:mm:ss`, new Date()),
        parse(acc, `HH:mm:ss`, new Date()),
      )
    ) {
      acc = endDate
    }

    return acc
  }, ``)

  return {
    startTime: format(parse(startTime, `HH:mm:ss`, new Date()), `HH:mm`),
    endTime: format(parse(endTime, `HH:mm:ss`, new Date()), `HH:mm`),
  }
}

const programDateReducer = (contents: IProgramContent[]) =>
  contents.reduce<[IProgramContent[], IProgramContent[]]>(
    (acc, cur) => {
      switch (true) {
        case isSameDay(
          new Date(dateToJaStdDate(cur.startDate)),
          new Date(2021, 6, 31), // 前夜祭：2021/7/31
        ):
          acc[0].push(cur)
          break
        case isSameDay(
          new Date(dateToJaStdDate(cur.startDate)),
          new Date(2021, 7, 1), // 当日：2021/8/1
        ):
          acc[1].push(cur)
          break
      }
      return acc
    },
    [[], []],
  )

const programVenueReducer = (contents: IProgramContent[]) =>
  contents.reduce<[IProgramContent[], IProgramContent[], IProgramContent[]]>(
    (acc, cur) => {
      switch (cur.venue[0]) {
        case `1`:
          acc[0].push(cur)
          break
        case `2`:
          acc[1].push(cur)
          break
        case `3`:
          acc[2].push(cur)
          break
      }
      return acc
    },
    [[], [], []],
  )

interface ITimetableProps {
  sectionId: string
  programData: IProgramData
}

export const Timetable = ({
  sectionId,
  programData: { contents },
}: ITimetableProps) => {
  const [prevDateContents, mainDateContents] = programDateReducer(contents)
  const [prevDateFirstContents, prevDateSecondContents, prevDateThirdContents] =
    programVenueReducer(prevDateContents)
  const [mainDateFirstContents, mainDateSecondContents, mainDateThirdContents] =
    programVenueReducer(mainDateContents)
  const { startTime: prevDateStartTime, endTime: prevDateEndTime } =
    timeRangeReducer(prevDateContents)
  const { startTime: mainDateStartTime, endTime: mainDateEndTime } =
    timeRangeReducer(mainDateContents)

  const oneHourTimeRange = timeRange.filter(
    (time) => time.split(`:`)[1] === `00`,
  )
  const prevDateOneHourTimeRange = oneHourTimeRange.slice(
    oneHourTimeRange.findIndex((t) => t === prevDateStartTime),
    oneHourTimeRange.findIndex((t) => t === prevDateEndTime),
  )
  const mainDateOneHourTimeRange = oneHourTimeRange.slice(
    oneHourTimeRange.findIndex((t) => t === mainDateStartTime),
    oneHourTimeRange.findIndex((t) => t === mainDateEndTime),
  )
  const prevDateQuarterHourTimeRange = timeRange.slice(
    timeRange.findIndex((t) => t === prevDateStartTime),
    timeRange.findIndex((t) => t === prevDateEndTime),
  )
  const mainDateQuarterHourTimeRange = timeRange.slice(
    timeRange.findIndex((t) => t === mainDateStartTime),
    timeRange.findIndex((t) => t === mainDateEndTime),
  )

  return (
    <Section id={sectionId}>
      <Container>
        <TimetableHeading>timetable</TimetableHeading>

        <DateHeading>7 / 31 (Sat)</DateHeading>
        <Inner>
          <TimesContainer>
            {prevDateOneHourTimeRange.map((time) => (
              <Time key={time}>{time}</Time>
            ))}
          </TimesContainer>
          <VenueColFirst>
            <VenueLabel labelNo="1" />
            {ProgramContents(
              prevDateFirstContents,
              prevDateQuarterHourTimeRange,
              `1`,
            )}
          </VenueColFirst>
          <VenueColSecond>
            <VenueLabel labelNo="2" />
            {ProgramContents(
              prevDateSecondContents,
              prevDateQuarterHourTimeRange,
              `2`,
            )}
          </VenueColSecond>
          <VenueColThird>
            <VenueLabel labelNo="3" />
            {ProgramContents(
              prevDateThirdContents,
              prevDateQuarterHourTimeRange,
              `3`,
            )}
          </VenueColThird>
          <Spacers />
        </Inner>

        <DateHeading>8 / 1 (Sun)</DateHeading>
        <Inner>
          <TimesContainer>
            {mainDateOneHourTimeRange.map((time) => (
              <Time key={time}>{time}</Time>
            ))}
          </TimesContainer>
          <VenueColFirst>
            <VenueLabel labelNo="1" />
            {ProgramContents(
              mainDateFirstContents,
              mainDateQuarterHourTimeRange,
              `1`,
            )}
          </VenueColFirst>
          <VenueColSecond>
            <VenueLabel labelNo="2" />
            {ProgramContents(
              mainDateSecondContents,
              mainDateQuarterHourTimeRange,
              `2`,
            )}
          </VenueColSecond>
          <VenueColThird>
            <VenueLabel labelNo="3" />
            {ProgramContents(
              mainDateThirdContents,
              mainDateQuarterHourTimeRange,
              `3`,
            )}
          </VenueColThird>
          <Spacers />
        </Inner>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  ${sectionStyle}

  margin-top: 108px;
  margin-bottom: 0;
  padding-top: 108px;
  padding-bottom: 64px;
  background-color: ${Style.COLOR.PERSIAN_GREEN};

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    margin-top: 136px;
    margin-bottom: 0;
    padding-top: 144px;
    padding-bottom: 144px;
  }
`

const Container = styled.div`
  ${containerStyle}
`

const Inner = styled.div`
  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    display: grid;
    grid-template-columns: ${Style.SIZE.TIMETABLE_COL_LEFT_WIDTH}px 1fr 1fr 1fr ${Style
        .SIZE.TIMETABLE_COL_RIGHT_WIDTH}px;
  }
`

const repeatingStripe = css`
  background-image: repeating-linear-gradient(
    to bottom,
    transparent,
    transparent ${Style.SIZE.TIMETABLE_CONTENT_HEIGHT}px,
    ${Style.COLOR.GREEN_SHEEN} ${Style.SIZE.TIMETABLE_CONTENT_HEIGHT}px,
    ${Style.COLOR.GREEN_SHEEN} ${Style.SIZE.TIMETABLE_CONTENT_HEIGHT * 2}px
  );
  background-position: 0 ${Style.SIZE.TIMETABLE_HEADER_HEIGHT}px;
`

const repeatingStripeHeader = css`
  &::before {
    content: '';
    display: block;
    height: ${Style.SIZE.TIMETABLE_HEADER_HEIGHT}px;
    background-color: ${Style.COLOR.GREEN_SHEEN};
  }
`

const TimesContainer = styled.div`
  display: none;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    ${repeatingStripe}
    ${repeatingStripeHeader}

    display: flex;
    grid-column: 1 / 2;
    flex-direction: column;
    border-right: 2px solid ${Style.COLOR.POWDER_BLUE};
  }
`

const Time = styled.time`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${Style.SIZE.TIMETABLE_CONTENT_HEIGHT}px;
  color: ${Style.COLOR.WHITE};
  font-size: 18px;
`

const TimetableHeading = styled.h2`
  ${headingStyle}

  margin-bottom: 28px;
  color: ${Style.COLOR.WHITE};

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-template-columns: 1 / 6;
  }
`

const venueColStyle = css`
  margin-top: 32px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    ${repeatingStripe}

    display: grid;
    grid-template-rows: ${Style.SIZE.TIMETABLE_HEADER_HEIGHT}px repeat(
        auto-fill,
        ${Style.SIZE.TIMETABLE_CONTENT_HEIGHT / 4}px
      );
    margin-top: 0;
  }
`

const VenueColFirst = styled.div`
  ${venueColStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 2 / 3;
    margin-right: -24px;
  }
`

const VenueColSecond = styled.div`
  ${venueColStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 3 / 4;
    margin-right: -24px;
  }
`

const VenueColThird = styled.div`
  ${venueColStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 4 / 5;
  }
`

const Spacers = styled.span`
  display: none;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    ${repeatingStripe}
    ${repeatingStripeHeader}

    display: flex;
    grid-column: 5 / 6;
    flex-direction: column;
    border-left: 2px solid ${Style.COLOR.POWDER_BLUE};
  }
`
