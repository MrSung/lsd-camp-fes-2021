import styled, { css } from 'styled-components'

import { Style } from '@/const/style'
import { sectionStyle, containerStyle, headingStyle } from '@/styles'
import { VenueLabel } from './venue-label'
import { Content } from './content'

const TIME_RANGE = [
  `17:00`,
  `17:30`,
  `18:00`,
  `18:30`,
  `19:00`,
  `19:30`,
  `20:00`,
  `20:30`,
  `21:00`,
  `21:30`,
  `22:00`,
]

const FIRST_VENUE_CONTENT = [
  {
    id: `1`,
    href: `#`,
    startTime: `17:00`,
    endTime: `18:00`,
    title: `音楽ライブ「東田トモヒロwith辻コースケ」`,
    host: `東田トモヒロwith辻コースケ`,
  },
  {
    id: `2`,
    href: `#`,
    startTime: `18:00`,
    endTime: `19:00`,
    title: `音楽ライブ「東田トモヒロwith辻コースケ」`,
    host: `東田トモヒロwith辻コースケ`,
  },
]

const SECOND_VENUE_CONTENT = [
  {
    id: `1`,
    href: `#`,
    startTime: `18:30`,
    endTime: `19:30`,
    title: `音楽ライブ「東田トモヒロwith辻コースケ」`,
    host: `東田トモヒロwith辻コースケ`,
  },
]

const THIRD_VENUE_CONTENT = [
  {
    id: `1`,
    href: `#`,
    startTime: `20:00`,
    endTime: `21:00`,
    title: `音楽ライブ「東田トモヒロwith辻コースケ」`,
    host: `東田トモヒロwith辻コースケ`,
  },
]

interface ITimetableProps {
  sectionId: string
}

export const Timetable = ({ sectionId }: ITimetableProps) => (
  <Section id={sectionId}>
    <Container>
      <TimetableHeading>timetable</TimetableHeading>
      <DateHeading>
        <DateContainer>7 / 31 (Sat)</DateContainer>
      </DateHeading>
      <Inner>
        <TimesContainer>
          {TIME_RANGE.filter((time) => time.split(`:`)[1] === `00`).map(
            (time) => (
              <Time key={time}>{time}</Time>
            ),
          )}
        </TimesContainer>
        <VenueColFirst>
          <VenueLabel labelNo={1} />
          {FIRST_VENUE_CONTENT.map((o) => {
            const startTimeGridIndex =
              TIME_RANGE.findIndex((t) => t === o.startTime) + 2
            const endTimeGridIndex =
              TIME_RANGE.findIndex((t) => t === o.endTime) + 2

            return (
              <Content
                key={o.id}
                href={o.href}
                labelNo={1}
                startTime={o.startTime}
                endTime={o.endTime}
                title={o.title}
                host={o.host}
                gridRow={`${startTimeGridIndex} / ${endTimeGridIndex}`}
              />
            )
          })}
        </VenueColFirst>
        <VenueColSecond>
          <VenueLabel labelNo={2} />
          {SECOND_VENUE_CONTENT.map((o) => {
            const startTimeGridIndex =
              TIME_RANGE.findIndex((t) => t === o.startTime) + 2
            const endTimeGridIndex =
              TIME_RANGE.findIndex((t) => t === o.endTime) + 2

            return (
              <Content
                key={o.id}
                href={o.href}
                labelNo={2}
                startTime={o.startTime}
                endTime={o.endTime}
                title={o.title}
                host={o.host}
                gridRow={`${startTimeGridIndex} / ${endTimeGridIndex}`}
              />
            )
          })}
        </VenueColSecond>
        <VenueColThird>
          <VenueLabel labelNo={3} />
          {THIRD_VENUE_CONTENT.map((o) => {
            const startTimeGridIndex =
              TIME_RANGE.findIndex((t) => t === o.startTime) + 2
            const endTimeGridIndex =
              TIME_RANGE.findIndex((t) => t === o.endTime) + 2

            return (
              <Content
                key={o.id}
                href={o.href}
                labelNo={3}
                startTime={o.startTime}
                endTime={o.endTime}
                title={o.title}
                host={o.host}
                gridRow={`${startTimeGridIndex} / ${endTimeGridIndex}`}
              />
            )
          })}
        </VenueColThird>
        <Spacers />
      </Inner>
    </Container>
  </Section>
)

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
        ${Style.SIZE.TIMETABLE_CONTENT_HEIGHT / 2}px
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
