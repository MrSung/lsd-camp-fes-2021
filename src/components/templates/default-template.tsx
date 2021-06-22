import React from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'

import { Style } from '@/const/style'

const LINKS = [`message`, `about`, `program`, `timetable`]

interface IDefaultTemplateProps {
  children: React.ReactNode
}

export const DefaultTemplate = ({ children }: IDefaultTemplateProps) => (
  <>
    <GlobalStyle />
    <Header>
      <Nav>
        <NavUl>
          {LINKS.map((link) => (
            <NavLi key={link}>
              <NavLink href={`#${link}`}>{link}</NavLink>
            </NavLi>
          ))}
        </NavUl>
      </Nav>
    </Header>
    <main>{children}</main>
  </>
)

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Style.COLOR.LEMON_CHIFFON};
    color: ${Style.COLOR.RAISIN_BLACK};
    font-family: 'ヒラギノ角ゴシック', 'Hiragino Sans', 'ＭＳ ゴシック',
      sans-serif;
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  a {
    color: ${Style.COLOR.BLUE_JEANS};
    text-decoration: none;

    &:hover {
      color: ${Style.COLOR.GREEN_BLUE_CRAYOLA};
    }
  }
`

export const containerStyle = css`
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px;
  padding-left: 24px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    max-width: 1170px;
    padding-right: 0;
    padding-left: 0;
  }
`

const Header = styled.header`
  padding-top: 44px;
  padding-bottom: 44px;
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

const NavLink = styled.a`
  display: flex;
  align-items: center;
  height: 50px;
  color: ${Style.COLOR.RAISIN_BLACK};
  text-transform: capitalize;

  &:hover {
    color: ${Style.COLOR.RAISIN_GRAY};
  }
`
