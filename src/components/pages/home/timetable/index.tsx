import { format, isSameDay } from 'date-fns'
import styled, { css } from 'styled-components'

import { Style } from '@/const/style'
import { timeRange } from '@/const/time-range'
import { VenueKey } from '@/const/venue'
import { sectionStyle, containerStyle, headingStyle } from '@/styles'
import { IProgramData, IProgramContent } from '@/pages'
import { dateToJaStdDateTime, dateToJaStdDate } from '@/utils/date'
import { VenueLabel } from './venue-label'
import { Content } from './content'

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

const ProgramContents = (contents: IProgramContent[], labelNo: VenueKey) =>
  contents.map((o) => {
    const startTime = format(
      new Date(dateToJaStdDateTime(o.startDate)),
      `HH:mm`,
    )
    const endTime = format(new Date(dateToJaStdDateTime(o.endDate)), `HH:mm`)
    const startTimeGridIndex = timeRange.findIndex((t) => t === startTime) + 2
    const endTimeGridIndex = timeRange.findIndex((t) => t === endTime) + 2

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

interface ITimetableProps {
  sectionId: string
  programData: IProgramData
}

export const Timetable = ({
  sectionId,
  programData: { contents },
}: ITimetableProps) => {
  const [firstVenueContents, secondVenueContents, thirdVenueContents] =
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
  const [prevDateFirstContents, mainDateFirstContents] =
    programDateReducer(firstVenueContents)
  const [prevDateSecondContents, mainDateSecondContents] =
    programDateReducer(secondVenueContents)
  const [prevDateThirdContents, mainDateThirdContents] =
    programDateReducer(thirdVenueContents)

  return (
    <Section id={sectionId}>
      <Container>
        <TimetableHeading>timetable</TimetableHeading>

        <DateHeading>
          <DateContainer>7 / 31 (Sat)</DateContainer>
        </DateHeading>
        <Inner>
          <TimesContainer>
            {timeRange
              .filter((time) => time.split(`:`)[1] === `00`)
              .map((time) => (
                <Time key={time}>{time}</Time>
              ))}
          </TimesContainer>
          <VenueColFirst>
            <VenueLabel labelNo="1" />
            {ProgramContents(prevDateFirstContents, `1`)}
          </VenueColFirst>
          <VenueColSecond>
            <VenueLabel labelNo="2" />
            {ProgramContents(prevDateSecondContents, `2`)}
          </VenueColSecond>
          <VenueColThird>
            <VenueLabel labelNo="3" />
            {ProgramContents(prevDateThirdContents, `3`)}
          </VenueColThird>
          <Spacers />
        </Inner>

        <DateHeading>
          <DateContainer>8 / 1 (Sun)</DateContainer>
        </DateHeading>
        <Inner>
          <TimesContainer>
            {timeRange
              .filter((time) => time.split(`:`)[1] === `00`)
              .map((time) => (
                <Time key={time}>{time}</Time>
              ))}
          </TimesContainer>
          <VenueColFirst>
            <VenueLabel labelNo="1" />
            {ProgramContents(mainDateFirstContents, `1`)}
          </VenueColFirst>
          <VenueColSecond>
            <VenueLabel labelNo="2" />
            {ProgramContents(mainDateSecondContents, `2`)}
          </VenueColSecond>
          <VenueColThird>
            <VenueLabel labelNo="3" />
            {ProgramContents(mainDateThirdContents, `3`)}
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

const DateHeading = styled.h3`
  height: 48px;
  background-color: ${Style.COLOR.GREEN_SHEEN};
  color: ${Style.COLOR.WHITE};
  font-size: 24px;
  line-height: 48px;
  text-align: center;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    height: ${Style.SIZE.TIMETABLE_HEADER_HEIGHT}px;
    padding-right: ${Style.SIZE.TIMETABLE_COL_RIGHT_WIDTH - 2}px;
    padding-left: ${Style.SIZE.TIMETABLE_COL_LEFT_WIDTH - 2}px;
    font-size: 36px;
    line-height: ${Style.SIZE.TIMETABLE_HEADER_HEIGHT}px;
  }

  & ~ & {
    margin-top: 196px;
  }
`

const DateContainer = styled.span`
  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    display: block;
    border-right: 2px solid ${Style.COLOR.POWDER_BLUE};
    border-left: 2px solid ${Style.COLOR.POWDER_BLUE};
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
