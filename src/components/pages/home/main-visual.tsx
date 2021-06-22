import Image from 'next/image'
import styled from 'styled-components'

import titleMessage from '@/images/title-message.svg'
import mvIllustration from '@/images/mv-illustration.png'
import { Style } from '@/const/style'
import { containerStyle } from '@/styles'

export const MainVisual = () => (
  <section>
    <Container>
      <ColLeft>
        <Image src={titleMessage} alt="" width={470} height={168} />
      </ColLeft>
      <ColRight>
        <Image src={mvIllustration} alt="" width={569} height={661} />
      </ColRight>
    </Container>
  </section>
)

const Container = styled.div`
  ${containerStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const ColLeft = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    display: block;
    margin-bottom: 128px;
  }
`

const ColRight = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    display: block;
    margin-bottom: 0;
  }
`
