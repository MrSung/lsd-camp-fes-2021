import styled from 'styled-components'

import { Style } from '@/const/style'
import { sectionStyle, containerStyle, headingStyle } from '@/styles'
import { VenueLabel } from './venue-label'
import { Content } from './content'

export const Timetable = () => (
  <Section>
    <Container>
      <TimetableHeading>timetable</TimetableHeading>
      <DateHeading>7/31 (Sat)</DateHeading>
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
      <VenueLabel labelNo={1} labelText="会場B" />
      <Content
        labelNo={1}
        time="10:30 〜 11:00"
        title="音楽ライブ「東田トモヒロwith辻コースケ」"
        host="東田トモヒロwith辻コースケ"
      />
      <VenueLabel labelNo={2} labelText="会場C" />
      <Content
        labelNo={2}
        time="10:30 〜 11:00"
        title="音楽ライブ「東田トモヒロwith辻コースケ」"
        host="東田トモヒロwith辻コースケ"
      />
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
  }
`

const Container = styled.div`
  ${containerStyle}
`

const TimetableHeading = styled.h2`
  ${headingStyle}

  margin-bottom: 28px;
  color: ${Style.COLOR.WHITE};
`

const DateHeading = styled.h3`
  height: 48px;
  background-color: ${Style.COLOR.GREEN_SHEEN};
  color: ${Style.COLOR.WHITE};
  font-size: 24px;
  line-height: 48px;
  text-align: center;
`
