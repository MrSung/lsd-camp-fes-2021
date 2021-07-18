import styled, { css } from 'styled-components'

import { Style, sectionStyle, containerStyle, headingStyle } from '@/styles'
import { timeRange } from '@/utils/time-range'

import { IProgramData } from '@/pages'
import { DateHeading } from './date-heading'
import { VenueLabel } from './venue-label'
import { ProgramContents } from './program-contents'
import {
  programDateReducer,
  programVenueReducer,
  timeRangeReducer,
} from './functions'

interface ITimetableProps {
  sectionId: string
  programData: IProgramData
}

export const Timetable = ({
  sectionId,
  programData: { contents },
}: ITimetableProps) => {
  const [prevDateContents, mainDateContents] = programDateReducer(contents)
  const [
    prevDateFirstContents,
    prevDateSecondContents,
    prevDateThirdContents,
    prevDateFourthContents,
  ] = programVenueReducer(prevDateContents)
  const [
    mainDateFirstContents,
    mainDateSecondContents,
    mainDateThirdContents,
    mainDateFourthContents,
  ] = programVenueReducer(mainDateContents)
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

        <Article>
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
            <VenueColFourth>
              <VenueLabel labelNo="4" />
              {ProgramContents(
                prevDateFourthContents,
                prevDateQuarterHourTimeRange,
                `4`,
              )}
            </VenueColFourth>
          </Inner>
        </Article>

        <Article>
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
            <VenueColFourth>
              <VenueLabel labelNo="4" />
              {ProgramContents(
                mainDateFourthContents,
                mainDateQuarterHourTimeRange,
                `4`,
              )}
            </VenueColFourth>
          </Inner>
        </Article>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  ${sectionStyle}

  margin-top: 144px;
  margin-bottom: 0;
  padding-top: 144px;
  padding-bottom: 144px;
  background-color: ${Style.COLOR.PERSIAN_GREEN};

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    margin-top: 136px;
    margin-bottom: 0;
  }
`

const Container = styled.div`
  ${containerStyle}
`

const TimetableHeading = styled.h2`
  ${headingStyle}

  margin-bottom: 28px;
  color: ${Style.COLOR.WHITE};

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-template-columns: 1 / 6;
  }
`

const Article = styled.article`
  & + & {
    margin-top: 96px;

    @media (min-width: ${Style.BREAKPOINT.MD}px) {
      margin-top: 196px;
    }
  }
`

const Inner = styled.div`
  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    display: grid;
    grid-template-columns: ${Style.SIZE.TIMETABLE_COL_LEFT_WIDTH}px 1fr 1fr 1fr 1fr;
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
  }
`

const VenueColSecond = styled.div`
  ${venueColStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 3 / 4;
  }
`

const VenueColThird = styled.div`
  ${venueColStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 4 / 5;
  }
`

const VenueColFourth = styled.div`
  ${venueColStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 5 / 6;
  }
`
