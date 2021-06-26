import styled from 'styled-components'

import { Style } from '@/const/style'
import { sectionStyle, containerStyle, headingStyle } from '@/styles'

export const Timetable = () => (
  <Section>
    <Container>
      <TimetableHeading>timetable</TimetableHeading>
    </Container>
  </Section>
)

const Section = styled.section`
  ${sectionStyle}

  margin-bottom: 0;
  padding-top: 48px;
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

  color: ${Style.COLOR.WHITE};
`
