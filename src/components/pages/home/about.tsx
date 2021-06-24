// import Image from 'next/image'
import styled from 'styled-components'

import { Style } from '@/const/style'
import {
  sectionStyle,
  containerStyle,
  headingStyle,
  leadStyle,
  inlineBlockStyle,
} from '@/styles'
import { LineBreak } from '@/components/parts'

export const About = () => (
  <Section>
    <Container>
      <AboutHeading>about</AboutHeading>
      <Lead>
        一人ひとりが
        <InlineBlock>アーティスト性を</InlineBlock>
        <InlineBlock>発見する二日間</InlineBlock>
      </Lead>
      <Paragraph>
        <LineBreak>
          {`完璧になってから\n何者かになれてから\nそう考えてしまいがちですが\nここはLSD.Camp\n\nみんなの挑戦を応援する場所\n\n欠けているからこそ\nハマるピースがあります\n\nLSD.Campフェスも\nたくさんのピースが集まってできた１枚の絵\n\n自分のスタイルでお楽しみください`}
        </LineBreak>
      </Paragraph>
    </Container>
  </Section>
)

const Section = styled.section`
  ${sectionStyle}
`

const Container = styled.div`
  ${containerStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    text-align: center;
  }
`

const AboutHeading = styled.h2`
  ${headingStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    margin-bottom: 48px;
  }
`

const Lead = styled.h3`
  ${leadStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    margin-bottom: 54px;
  }
`

const InlineBlock = styled.span`
  ${inlineBlockStyle}
`

const Paragraph = styled.div`
  font-size: 16px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    font-size: 18px;
  }
`
