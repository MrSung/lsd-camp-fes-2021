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
          <TimeHeading />
        </TimesContainer>
        <VenueColFirst>
          <VenueLabel labelNo={0} labelText="会場A" />
          <Content
            labelNo={0}
            time="10:30 〜 11:00"
            title="音楽ライブ「東田トモヒロwith辻コースケ」"
            host="東田トモヒロwith辻コースケ"
          />
          <Content
            labelNo={0}
            time="10:30 〜 11:00"
            title="音楽ライブ「東田トモヒロwith辻コースケ」"
            host="東田トモヒロwith辻コースケ"
          />
        </VenueColFirst>
        <VenueColSecond>
          <VenueLabel labelNo={1} labelText="会場B" />
          <Content
            labelNo={1}
            time="10:30 〜 11:00"
            title="音楽ライブ「東田トモヒロwith辻コースケ」"
            host="東田トモヒロwith辻コースケ"
          />
        </VenueColSecond>
        <VenueColThird>
          <VenueLabel labelNo={2} labelText="会場C" />
          <Content
            labelNo={2}
            time="10:30 〜 11:00"
            title="音楽ライブ「東田トモヒロwith辻コースケ」"
            host="東田トモヒロwith辻コースケ"
          />
        </VenueColThird>
        <SpacerContainer>
          <SpacerHeading />
        </SpacerContainer>
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
    grid-template-columns: ${Style.SIZE.TIMETABLE_COL_LEFT} 1fr 1fr 1fr ${Style
        .SIZE.TIMETABLE_COL_RIGHT};
  }
`

const TimesContainer = styled.div`
  display: none;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    display: flex;
    grid-column: 1 / 2;
    flex-direction: column;
    border-right: 2px solid ${Style.COLOR.POWDER_BLUE};
  }
`

const TimeHeading = styled.div`
  height: 80px;
  background-color: ${Style.COLOR.GREEN_SHEEN};
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
    height: 80px;
    padding-right: calc(${Style.SIZE.TIMETABLE_COL_RIGHT} - 2px);
    padding-left: calc(${Style.SIZE.TIMETABLE_COL_LEFT} - 2px);
    font-size: 36px;
    line-height: 80px;
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
    margin-top: 0;
  }
`

const VenueColFirst = styled.div`
  ${venueColStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 2 / 3;
  }
`

const VenueColSecond = styled.div`
  ${venueColStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 3 / 4;
  }
`

const VenueColThird = styled.div`
  ${venueColStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 4 / 5;
  }
`

const SpacerContainer = styled.span`
  display: none;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    display: flex;
    grid-column: 5 / 6;
    flex-direction: column;
    border-left: 2px solid ${Style.COLOR.POWDER_BLUE};
  }
`

const SpacerHeading = styled.div`
  height: 80px;
  background-color: ${Style.COLOR.GREEN_SHEEN};
`
