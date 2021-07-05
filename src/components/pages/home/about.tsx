import Image from 'next/image'
import styled, { css } from 'styled-components'

import boyIllust from '@/images/boy-illustration.png'
import boyIllustBg from '@/images/boy-illustration-bg.png'
import girlIllust from '@/images/girl-illustration.png'
import girlIllustBg from '@/images/girl-illustration-bg.png'
import { Style } from '@/const/style'
import {
  sectionStyle,
  containerStyle,
  headingStyle,
  leadStyle,
  inlineBlockStyle,
} from '@/styles'
import { LineBreak, ExternalLink } from '@/components/parts'

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
        <ImageInner>
          <Image src={boyIllustBg} alt="" width={370} height={586} />
        </ImageInner>
        <ImageInner>
          <Image src={boyIllust} alt="" width={370} height={586} />
        </ImageInner>
      </ImageContainerLeft>
      <ImageContainerRight>
        <ImageInner>
          <Image src={girlIllustBg} alt="" width={370} height={586} />
        </ImageInner>
        <ImageInner>
          <Image src={girlIllust} alt="" width={370} height={586} />
        </ImageInner>
      </ImageContainerRight>
      <Paragraph>
        <LineBreak>
          {`完璧になってから\n何者かになれてから\nそう考えてしまいがちですが\n`}
        </LineBreak>
        <ExternalLink href="https://lifestyledesign.camp/" isSecondary>
          ここはLSD.Camp
        </ExternalLink>
        <LineBreak>
          {`\nみんなの挑戦を応援する場所\n\n欠けているからこそ\nハマるピースがあります\n\nLSD.Campフェスも\nたくさんのピースが集まってできた１枚の絵\n\n自分のスタイルでお楽しみください`}
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

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-template-columns: 1fr 400px 1fr;
    text-align: center;
  }
`

const AboutHeading = styled.h2`
  ${headingStyle}

  grid-column: 1 / 3;
  grid-row: 1 / 2;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 2 / 3;
    margin-bottom: 48px;
  }
`

const Lead = styled.h3`
  ${leadStyle}

  grid-column: 1 / 3;
  grid-row: 2 / 3;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
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
  position: relative;
`

const ImageContainerLeft = styled.div`
  ${imageStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }
`

const ImageContainerRight = styled.div`
  ${imageStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 3 / 4;
    grid-row: 1 / 4;
  }
`

const ImageInner = styled.div`
  position: absolute;
`

const Paragraph = styled.p`
  grid-column: 1 / 3;
  font-size: 16px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 2 / 3;
    font-size: 18px;
  }
`
