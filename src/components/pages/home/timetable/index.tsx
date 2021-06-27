import styled, { css } from 'styled-components'

import { Style } from '@/const/style'
import { sectionStyle, containerStyle, headingStyle } from '@/styles'
import { VenueLabel } from './venue-label'
import { Content } from './content'

export const Timetable = () => (
  <Section>
    <Container>
      <TimetableHeading>timetable</TimetableHeading>
      <DateHeading>
        <DateContainer>7 / 31 (Sat)</DateContainer>
      </DateHeading>
      <Inner>
        <TimesContainer>
          <Time>17:00</Time>
          <Time>18:00</Time>
        </TimesContainer>
        <VenueColFirst>
          <VenueLabel labelNo={1} />
          <Content
            href="#"
            labelNo={1}
            time="10:30 〜 11:00"
            title="音楽ライブ「東田トモヒロwith辻コースケ」"
            host="東田トモヒロwith辻コースケ"
          />
          <Content
            href="#"
            labelNo={1}
            time="10:30 〜 11:00"
            title="音楽ライブ「東田トモヒロwith辻コースケ」"
            host="東田トモヒロwith辻コースケ"
          />
        </VenueColFirst>
        <VenueColSecond>
          <VenueLabel labelNo={2} />
          <Content
            href="#"
            labelNo={2}
            time="10:30 〜 11:00"
            title="音楽ライブ「東田トモヒロwith辻コースケ」"
            host="東田トモヒロwith辻コースケ"
          />
        </VenueColSecond>
        <VenueColThird>
          <VenueLabel labelNo={3} />
          <Content
            href="#"
            labelNo={3}
            time="10:30 〜 11:00"
            title="音楽ライブ「東田トモヒロwith辻コースケ」"
            host="東田トモヒロwith辻コースケ"
          />
        </VenueColThird>
        <Spacers />
      </Inner>
    </Container>
  </Section>
)

const Section = styled.section`
  ${sectionStyle}

  margin-bottom: 0;
  padding-top: 48px;
  padding-bottom: 64px;
  background-color: ${Style.COLOR.PERSIAN_GREEN};

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    padding-top: 90px;
    padding-bottom: 108px;
  }
`

const Container = styled.div`
  ${containerStyle}
`

const Inner = styled.div`
  @media (min-width: ${Style.BREAKPOINT.MD}) {
    display: grid;
    grid-template-columns: ${Style.SIZE.TIMETABLE_COL_LEFT_WIDTH}px 1fr 1fr 1fr ${Style
        .SIZE.TIMETABLE_COL_RIGHT_WIDTH}px;
  }
`

const repeatingStripe = css`
  background-image: repeating-linear-gradient(
    to bottom,
    transparent,
    transparent
      ${Style.SIZE.TIMETABLE_CONTENT_HEIGHT +
      Style.SIZE.TIMETABLE_HEADER_HEIGHT}px,
    ${Style.COLOR.GREEN_SHEEN}
      ${Style.SIZE.TIMETABLE_CONTENT_HEIGHT +
      Style.SIZE.TIMETABLE_HEADER_HEIGHT}px,
    ${Style.COLOR.GREEN_SHEEN}
      ${Style.SIZE.TIMETABLE_CONTENT_HEIGHT * 2 +
      Style.SIZE.TIMETABLE_HEADER_HEIGHT}px
  );
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

  @media (min-width: ${Style.BREAKPOINT.MD}) {
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

  @media (min-width: ${Style.BREAKPOINT.MD}) {
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

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    height: ${Style.SIZE.TIMETABLE_HEADER_HEIGHT}px;
    padding-right: ${Style.SIZE.TIMETABLE_COL_RIGHT_WIDTH - 2}px;
    padding-left: ${Style.SIZE.TIMETABLE_COL_LEFT_WIDTH - 2}px;
    font-size: 36px;
    line-height: ${Style.SIZE.TIMETABLE_HEADER_HEIGHT}px;
  }
`

const DateContainer = styled.span`
  @media (min-width: ${Style.BREAKPOINT.MD}) {
    display: block;
    border-right: 2px solid ${Style.COLOR.POWDER_BLUE};
    border-left: 2px solid ${Style.COLOR.POWDER_BLUE};
  }
`

const venueColStyle = css`
  margin-top: 32px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    ${repeatingStripe}

    margin-top: 0;
  }
`

const VenueColFirst = styled.div`
  ${venueColStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 2 / 3;
    margin-right: -24px;
  }
`

const VenueColSecond = styled.div`
  ${venueColStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 3 / 4;
    margin-right: -24px;
  }
`

const VenueColThird = styled.div`
  ${venueColStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 4 / 5;
  }
`

const Spacers = styled.span`
  display: none;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    ${repeatingStripe}
    ${repeatingStripeHeader}

    display: flex;
    grid-column: 5 / 6;
    flex-direction: column;
    border-left: 2px solid ${Style.COLOR.POWDER_BLUE};
  }
`
