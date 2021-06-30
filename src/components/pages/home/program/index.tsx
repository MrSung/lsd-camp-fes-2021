import styled from 'styled-components'

import cardImage1 from '@/images/card-image-1.jpg'
import cardImage2 from '@/images/card-image-2.jpg'
import cardImage3 from '@/images/card-image-3.jpg'
import cardImage4 from '@/images/card-image-4.jpg'
import { Style } from '@/const/style'
import { sectionStyle, containerStyle, headingStyle } from '@/styles'
import { ThumbLink } from './thumb-link'

interface IProgramProps {
  sectionId: string
}

export const Program = ({ sectionId }: IProgramProps) => (
  <Section id={sectionId}>
    <Container>
      <ProgramHeading>program</ProgramHeading>
      <ThumbLink
        href="#"
        labelNo={1}
        src={cardImage1}
        alt=""
        width={270}
        height={270}
        title="“NEO渋谷”を創り続ける、わたしの憧れのリーダーズ"
      />
      <ThumbLink
        href="#"
        labelNo={1}
        src={cardImage2}
        alt=""
        width={270}
        height={270}
        title="平成の渋谷を見続けてきた、SHIBUYA愛に満ちた3人"
      />
      <ThumbLink
        href="#"
        labelNo={1}
        src={cardImage3}
        alt=""
        width={270}
        height={270}
        title="いま注目の幡ヶ谷エリアで商いをする地元の仲間たち"
      />
      <ThumbLink
        href="#"
        labelNo={2}
        src={cardImage4}
        alt=""
        width={270}
        height={270}
        title="会うたびに刺激をくれる、“いまの渋谷” に詳しい仲間たち"
      />
    </Container>
  </Section>
)

const Section = styled.section`
  ${sectionStyle}

  padding-top: 72px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    padding-bottom: 48px;
  }
`

const Container = styled.div`
  ${containerStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const ProgramHeading = styled.h2`
  ${headingStyle}

  margin-bottom: 24px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 1 / 5;
    margin-bottom: 32px;
  }
`
