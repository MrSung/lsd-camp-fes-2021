import Image from 'next/image'
import styled from 'styled-components'

import favicon from '@/images/favicon.png'
import { containerStyle } from '@/styles'
import { CREDIT_LIST } from '@/contents/credit-list'
import { Style } from '@/styles'
import { SITE_TITLE } from '@/components/pages/home/meta'
import { ExternalLink } from '@/components/parts'

export const Footer = () => (
  <Wrapper>
    <FooterContainer>
      <FooterHeading>{SITE_TITLE}</FooterHeading>
      <FooterList>
        {CREDIT_LIST.map((o) => (
          <li key={o.name}>
            {o.work} by
            {` `}
            <ExternalLink
              href={o.link}
              display="inline-block"
              color={Style.COLOR.POWDER_BLUE}
              hoverColor={Style.COLOR.WHITE}
            >
              {o.name}
            </ExternalLink>
          </li>
        ))}
      </FooterList>
      <FooterImageContainer>
        <Image src={favicon} alt="" width={200} height={200} />
      </FooterImageContainer>
    </FooterContainer>
  </Wrapper>
)

const Wrapper = styled.footer`
  padding: 72px 0;
  background-color: ${Style.COLOR.DARK_STATE_GRAY};
  color: ${Style.COLOR.WHITISH_GRAY};

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    min-width: ${Style.SIZE.CONTAINER_WIDTH}px;
  }
`

const FooterContainer = styled.div`
  ${containerStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    display: grid;
    grid-template-columns: 1fr 200px;
    font-size: 18px;
  }
`

const FooterHeading = styled.h2`
  font-size: 24px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`

const FooterList = styled.ul`
  margin-top: 1em;
  margin-bottom: 1em;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    margin-bottom: 0;
  }
`

const FooterImageContainer = styled.div`
  @media (max-width: ${Style.BREAKPOINT.MD - 1}px) {
    width: 100px;
    height: 100px;
    margin-top: 1.5em;
  }

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    display: flex;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    align-items: center;
  }
`
