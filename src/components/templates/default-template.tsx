import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

import { Style } from '@/const/style'
import { GlobalStyle, containerStyle } from '@/styles'
import { HOME_LINKS } from '@/const/home-links'

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
  font-size: 16px;
  text-transform: capitalize;
  cursor: pointer;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    font-size: 20px;
  }
`

const Main = styled.main`
  padding-top: ${Style.SIZE.HEADER_HEIGHT}px;
`
