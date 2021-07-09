import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

import { HOME_LINKS } from '@/const/home-links'
import { CREDIT_LIST } from '@/const/credit-list'
import { Style } from '@/const/style'
import { GlobalStyle, containerStyle } from '@/styles'
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
      <Container>
        <ul>
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
        </ul>
      </Container>
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
`

const Container = styled.div`
  ${containerStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    font-size: 18px;
  }
`
