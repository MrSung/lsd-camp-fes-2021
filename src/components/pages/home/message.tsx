import styled, { css } from 'styled-components'

import katy from '@/images/katy.jpg'
import flower from '@/images/flower.jpg'
import { Style } from '@/const/style'
import { containerStyle } from '@/styles'
import { Heading } from '@/components/parts/heading'
import { LayerImage } from '@/components/parts/layer-image'

export const Message = () => (
  <section>
    <Container>
      <MessageHeading>message</MessageHeading>
      <Subtitle>
        未完成な自分から
        <br />
        はじめよう
      </Subtitle>
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
        いつかではなく
        <br />
        &quot;今&quot; の自分を見て
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
        今のあなただからできることが
        <br />
        きっとあるよ
      </ParagraphSecond>
    </Container>
  </section>
)

const Container = styled.div`
  ${containerStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    display: grid;
    grid-template-columns: 570px 1fr;
    grid-template-rows: 198px 100px 100px 1fr;
  }
`

const MessageHeading = styled(Heading)`
  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`

const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: normal;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin-left: 30px;
    font-size: 48px;
  }
`

const ImageFirst = styled.div`
  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 1 / 2;
    grid-row: 2 / 5;
    margin-left: -40px;
  }
`

const ImageSecond = styled.div`
  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }
`

const paragraphStyle = css`
  font-size: 18px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    margin-left: 30px;
    font-size: 24px;
  }

  & + & {
    margin-top: 1em;
  }
`

const ParagraphFirst = styled.p`
  ${paragraphStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`

const ParagraphSecond = styled.p`
  ${paragraphStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`
