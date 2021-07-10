import Image from 'next/image'
import styled from 'styled-components'
import { Link } from 'react-scroll'

import favicon from '@/images/favicon.png'
import { HOME_LINKS } from '@/const/home-links'
import { CREDIT_LIST } from '@/const/credit-list'
import { Style } from '@/const/style'
import { GlobalStyle, containerStyle } from '@/styles'
import { SITE_TITLE } from '@/components/pages/home/meta'
import { ExternalLink } from '@/components/parts'

interface IDefaultTemplateProps {
  children: React.ReactNode
}

export const DefaultTemplate = ({ children }: IDefaultTemplateProps) => (
  <>
    <GlobalStyle />
    <Header>
      <Nav>
        <NavUl>
          {HOME_LINKS.map(({ link, offset }) => (
            <NavLi key={link}>
              <NavLink to={link} smooth="easeInOutQuint" offset={offset}>
                {link}
              </NavLink>
            </NavLi>
          ))}
        </NavUl>
      </Nav>
    </Header>
    <Main>{children}</Main>
    <Footer>
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
    </Footer>
  </>
)

const Header = styled.header`
  position: fixed;
  z-index: ${Style.Z_INDEX_10};
  top: 0;
  right: 0;
  left: 0;
  padding-top: 36px;
  padding-bottom: 36px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    margin-bottom: 12px;
    padding-top: 44px;
    padding-bottom: 44px;
  }
`

const Nav = styled.nav`
  ${containerStyle}
`

const NavUl = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
`

const NavLi = styled.li``

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 50px;
  text-transform: capitalize;
  cursor: pointer;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    font-size: 20px;
  }
`

const Main = styled.main`
  padding-top: ${Style.SIZE.HEADER_HEIGHT}px;
`

const Footer = styled.footer`
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
  }

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    display: flex;
    align-items: center;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }
`
