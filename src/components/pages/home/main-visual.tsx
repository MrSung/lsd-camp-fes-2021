import styled from 'styled-components'
import { motion as Motion } from 'framer-motion'

import { Style, sectionStyle, containerStyle } from '@/styles'
import { SITE_TITLE, MAIN_MESSAGE } from '@/contents/meta'

const ImageContainer: React.FC = ({ children }) => (
  <Motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 1,
      ease: `easeInOut`,
    }}
  >
    {children}
  </Motion.div>
)

export const MainVisual = () => (
  <Section>
    <Container>
      <ColLeft>
        <h1>
          <ImageContainer>
            <img
              src="/svg/title-message.svg"
              alt={`${SITE_TITLE} ${MAIN_MESSAGE}`}
              width={470}
              height={168}
            />
          </ImageContainer>
        </h1>
      </ColLeft>
      <ColRight>
        <ImageContainer>
          <img src="/png/mv-illustration.png" alt="" width={569} height={661} />
        </ImageContainer>
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
