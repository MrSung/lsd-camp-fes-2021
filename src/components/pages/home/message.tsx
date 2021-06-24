import styled, { css } from 'styled-components'

import katy from '@/images/katy.jpg'
import flower from '@/images/flower.jpg'
import { Style } from '@/const/style'
import {
  sectionStyle,
  containerStyle,
  headingStyle,
  leadStyle,
  inlineBlockStyle,
} from '@/styles'
import { LayerImage, LineBreak } from '@/components/parts'

export const Message = () => (
  <Section>
    <Container>
      <MessageHeading>message</MessageHeading>
      <Lead>
        未完成な自分から
        <InlineBlock>はじめよう</InlineBlock>
      </Lead>
      <ImageFirst>
        <LayerImage
          src={katy}
          alt=""
          width={450}
          height={600}
          layerPosition="leftBottom"
          layerColor={Style.COLOR.MANGO_TANGO}
        />
      </ImageFirst>
      <ParagraphFirst>
        <LineBreak>{`いつかではなく\n"今" の自分を見て`}</LineBreak>
      </ParagraphFirst>
      <ImageSecond>
        <LayerImage
          src={flower}
          alt=""
          width={600}
          height={450}
          layerPosition="rightBottom"
          layerColor={Style.COLOR.STRAW}
        />
      </ImageSecond>
      <ParagraphSecond>
        <LineBreak>{`今のあなただからできることが\nきっとあるよ`}</LineBreak>
      </ParagraphSecond>
    </Container>
  </Section>
)

const Section = styled.section`
  ${sectionStyle}
`

const Container = styled.div`
  ${containerStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    display: grid;
    grid-template-columns: 520px 1fr;
    grid-template-rows: 198px 108px 108px 1fr;
  }
`

const MessageHeading = styled.h2`
  ${headingStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`

const Lead = styled.h3`
  ${leadStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin-bottom: 0;
    margin-left: 30px;
  }
`

const ImageFirst = styled.div`
  margin-bottom: 40px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 1 / 2;
    grid-row: 2 / 5;
    margin-left: -40px;
  }
`

const ImageSecond = styled.div`
  margin-bottom: 40px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }
`

const paragraphStyle = css`
  margin-bottom: 24px;
  font-size: 18px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    margin-left: 30px;
    font-size: 24px;
  }
`

const ParagraphFirst = styled.div`
  ${paragraphStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`

const ParagraphSecond = styled.div`
  ${paragraphStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`

const InlineBlock = styled.span`
  ${inlineBlockStyle}
`
