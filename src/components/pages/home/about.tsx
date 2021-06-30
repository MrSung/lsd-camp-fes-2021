import Image from 'next/image'
import styled, { css } from 'styled-components'

import boyIllust from '@/images/boy-illustration.png'
import girlIllust from '@/images/girl-illustration.png'
import { Style } from '@/const/style'
import {
  sectionStyle,
  containerStyle,
  headingStyle,
  leadStyle,
  inlineBlockStyle,
} from '@/styles'
import { LineBreak } from '@/components/parts'

interface IAboutProps {
  sectionId: string
}

export const About = ({ sectionId }: IAboutProps) => (
  <Section id={sectionId}>
    <Container>
      <AboutHeading>about</AboutHeading>
      <Lead>
        一人ひとりが
        <InlineBlock>アーティスト性を</InlineBlock>
        <InlineBlock>発見する二日間</InlineBlock>
      </Lead>
      <ImageContainerLeft>
        <Image src={boyIllust} alt="" width={351} height={630} />
      </ImageContainerLeft>
      <ImageContainerRight>
        <Image src={girlIllust} alt="" width={369} height={546} />
      </ImageContainerRight>
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

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-template-columns: 1fr 400px 1fr;
    text-align: center;
  }
`

const AboutHeading = styled.h2`
  ${headingStyle}

  grid-column: 1 / 3;
  grid-row: 1 / 2;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 2 / 3;
    margin-bottom: 48px;
  }
`

const Lead = styled.h3`
  ${leadStyle}

  grid-column: 1 / 3;
  grid-row: 2 / 3;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 2 / 3;
    margin-bottom: 54px;
  }
`

const InlineBlock = styled.span`
  ${inlineBlockStyle}
`

const imageStyle = css`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
`

const ImageContainerLeft = styled.div`
  ${imageStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }
`

const ImageContainerRight = styled.div`
  ${imageStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 3 / 4;
    grid-row: 1 / 4;
  }
`

const Paragraph = styled.p`
  grid-column: 1 / 3;
  font-size: 16px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 2 / 3;
    font-size: 18px;
  }
`
