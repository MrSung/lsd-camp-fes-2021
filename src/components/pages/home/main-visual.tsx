import Image from 'next/image'
import styled from 'styled-components'

import titleMessage from '@/images/title-message.svg'
import mvIllustration from '@/images/mv-illustration.png'
import { Style } from '@/const/style'
import { sectionStyle, containerStyle } from '@/styles'
import { SITE_TITLE, MAIN_MESSAGE } from './meta'

export const MainVisual = () => (
  <Section>
    <Container>
      <ColLeft>
        <Image
          src={titleMessage}
          alt={`${SITE_TITLE} ${MAIN_MESSAGE}`}
          width={470}
          height={168}
        />
      </ColLeft>
      <ColRight>
        <Image src={mvIllustration} alt="" width={569} height={661} />
      </ColRight>
    </Container>
  </Section>
)

const Section = styled.section`
  ${sectionStyle}
`

const Container = styled.div`
  ${containerStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const ColLeft = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    display: block;
    margin-bottom: 128px;
  }
`

const ColRight = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    display: block;
    margin-bottom: 0;
  }
`
